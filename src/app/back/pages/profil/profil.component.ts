import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';
import { DatePipe, formatDate } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TopBarComponent } from 'app/back/top-bar/top-bar.component';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: Utilisateurs;
  dateUser:Date;
  dp : DatePipe;
  urlProfil : any;

  profilForm: FormGroup;
  passwordForm: FormGroup;


  invalid_profil = false;
  valid_profil = false;

  invalid_change_password = false;
  valid_change_password = false;

  nomComplet : AbstractControl;
  email : AbstractControl;
  dateNaissance :  AbstractControl;
  profil : AbstractControl;
  password : AbstractControl;
  repassword : AbstractControl;
  minLength = 8;
  maxLength = 100;
  valid_profil_msg = '';
  invalid_profil_msg = '';
  valid_change_password_msg = '';
  invalid_change_password_msg = '';

  changePassword = false;

  constructor(private service : Service,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.service.userConnecte(localStorage.getItem('id')).subscribe((value) => {
      this.user = value.result;
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
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      repassword: ['', [Validators.required, Validators.minLength(this.minLength)]]
    })

    this.password = this.passwordForm.controls['password'];
    this.repassword = this.passwordForm.controls['repassword'];
  }
  onInputChange(event){
    this.invalid_profil = false;
    this.valid_profil = false;
  }

  onInputChangePassword(event){
    this.valid_change_password = false;
    this.invalid_change_password = false;
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.invalid_profil = false;
      const file = event.target.files[0];
      this.profilForm.patchValue({
        profilSource: file
      });
    }
  }

  formChangePassword(){
    this.changePassword = true;

    this.invalid_profil = false;
    this.invalid_profil_msg = '';
    this.valid_profil = false;
    this.valid_profil_msg = '';
  }

  formProfil(){
    this.passwordForm.reset();
    this.changePassword = false;
    this.invalid_change_password = false;
    this.invalid_change_password_msg = '';
    this.valid_change_password = false;
    this.valid_change_password_msg = '';
  }
}
