import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';
import { DatePipe, formatDate } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopBarComponent } from 'app/back/top-bar/top-bar.component';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-moderator',
  templateUrl: './modif-moderator.component.html',
  styleUrls: ['./modif-moderator.component.css']
})
export class ModifModeratorComponent implements OnInit {

  user: Utilisateurs;
  dateUser:Date;
  dp : DatePipe;
  urlProfil : any;

  profilForm: FormGroup;

  invalid_profil = false;
  valid_profil = false;

  nomComplet : AbstractControl;
  email : AbstractControl;
  dateNaissance :  AbstractControl;
  profil : AbstractControl;
  password : AbstractControl;
  minLength = 8;
  maxLength = 100;
  valid_profil_msg = '';
  invalid_profil_msg = '';
  modif_info = false;
  idUtilisateur : any;
  constructor(private service : Service,private formBuilder: FormBuilder,@Inject(DOCUMENT) private document: Document,private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.service.userById(this.route.snapshot.params.id).subscribe((value) => {
      this.user = value.result;
      this.idUtilisateur = this.user.idUtilisateur;
      this.urlProfil = this.service.urlProfil(this.user.profilUtilisateur);
      this.profilForm = this.formBuilder.group({
        nomComplet: [this.user.nomCompletUtilisateur, [Validators.required, Validators.maxLength(this.maxLength)]],
        email :[this.user.emailUtilisateur, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        profil: [''],
        profilSource : [''],
        dateNaissance: [formatDate(this.user.dateNaissanceUtilisateur, 'yyyy-MM-dd', 'en'), [Validators.required]]
      })
      this.nomComplet = this.profilForm.controls['nomComplet'];
      this.email = this.profilForm.controls['email'];
      this.dateNaissance = this.profilForm.controls['dateNaissance'];
      this.profil = this.profilForm.controls['profil'];
    });
  }
  onInputChange(event){
    this.invalid_profil = false;
    this.valid_profil = false;
    this.modif_info = true;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.invalid_profil = false;
      this.valid_profil = false;
      const file = event.target.files[0];
      this.profilForm.patchValue({
        profilSource: file
      });
    }
  }

  modificationProfilReussi(message){
    this.valid_profil = true;
    this.invalid_profil = false;
    this.valid_profil_msg = message;
  }
  modificationProfilEchoue(message){
    this.invalid_profil = true;
    this.valid_profil = false;
    this.invalid_profil_msg = message;
  }

  //action submit
  modifUtilisateur(){
    var newUser = new Utilisateurs();
    newUser.idUtilisateur = parseInt(this.route.snapshot.params.id);
    if(this.profilForm.get('profil').value == null || this.profilForm.get('profil').value == ""){
      if(this.modif_info){ // info modifié
        newUser.nomCompletUtilisateur = this.nomComplet.value;
        newUser.emailUtilisateur = this.email.value;
        newUser.dateNaissanceUtilisateur = this.dateNaissance.value;
        this.service.updateUser(newUser).subscribe((value) => {
          if(value.status) this.modificationProfilReussi(value.message);
          else this.modificationProfilEchoue(value.message);
        })
      }
    }
    else{ //modifier image
      const formData = new FormData();
      formData.append('profil', this.profilForm.get('profilSource').value);
      this.service.upload(formData).subscribe(res =>{
        if(res != null && res.status == true){
            this.service.deleteProfilFile(this.user.profilUtilisateur).subscribe(response =>{
              if(response.fileDeleted){
                if(this.modif_info){ // info modifié aussi
                  newUser.profilUtilisateur = res.data;
                  newUser.nomCompletUtilisateur = this.nomComplet.value;
                  newUser.emailUtilisateur = this.email.value;
                  newUser.dateNaissanceUtilisateur = this.dateNaissance.value;
                }
                else  newUser.profilUtilisateur = res.data;
                this.service.updateUser(newUser).subscribe((value) => {
                  if(value.status){
                    this.modificationProfilReussi(value.message);
                    setTimeout(function() {  this.document.location.reload(); },1000);
                  }
                  else this.modificationProfilEchoue(value.message);
                })
              }
            })
        }
        else  this.modificationProfilEchoue(res.message);
      })
    }
  }
}
