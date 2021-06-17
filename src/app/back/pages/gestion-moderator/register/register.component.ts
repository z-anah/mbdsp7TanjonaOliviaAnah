import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'app/model/roles';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listRole : Roles[];
	registerForm: FormGroup;

  title = "Inscription";
  invalid_register = false;
  valid_register = false;

  nomComplet : AbstractControl;
  email : AbstractControl;
  password : AbstractControl;
  repassword : AbstractControl;
  dateNaissance :  AbstractControl;
  role : AbstractControl;
  profil : AbstractControl;

  minLength = 8;
  maxLength = 100;
  valid_register_msg = '';
  invalid_register_msg = '';

  constructor(private router:Router, private formBuilder: FormBuilder, private service : Service) {
  }

	ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nomComplet: ['', [Validators.required, Validators.maxLength(this.maxLength)]],
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      repassword: ['', [Validators.required, Validators.minLength(this.minLength)]],
      role: [2, [Validators.required]],
      profil: ['', [Validators.required]],
      profilSource : ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]]
    },
    {
      validator : this.passwordMatchValidator('password','repassword')
    });

    this.nomComplet = this.registerForm.controls['nomComplet'];
    this.email = this.registerForm.controls['email'];
    this.dateNaissance = this.registerForm.controls['dateNaissance'];
    this.password = this.registerForm.controls['password'];
    this.role = this.registerForm.controls['role'];
    this.profil = this.registerForm.controls['profil'];
    this.setListRoles();

	}

  setListRoles(){
    this.service.listRole().subscribe(res =>{
        if(res.status) this.listRole = res.data;
    });
  }
  passwordMatchValidator(passwordControl: string, repasswordControl: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordControl];
      const matchingControl = formGroup.controls[repasswordControl];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ notSame: true });
      } else {
          matchingControl.setErrors(null);
      }
    }
  }

	register(){
    const formData = new FormData();
      formData.append('profil', this.registerForm.get('profilSource').value);
      var newUser = new Utilisateurs();
      newUser.emailUtilisateur = this.email.value;
      this.service.check_mail(newUser).subscribe(res =>{
        if(res.status){
          this.invalid_register = true;
          this.valid_register = false;
          this.invalid_register_msg = res.message;
        }
        else{
          this.service.upload(formData).subscribe(res =>{
            if(res != null && res.status == true){
              newUser.nomCompletUtilisateur = this.nomComplet.value;
              newUser.emailUtilisateur = this.email.value;
              newUser.dateNaissanceUtilisateur = this.dateNaissance.value;
              newUser.motdepasseUtilisateur = this.password.value;
              newUser.profilUtilisateur = res.data
              newUser.idRole = this.role.value;
              this.service.register(newUser).subscribe(res =>{
                  if(res.status) {
                    this.valid_register = true;
                    this.invalid_register = false;
                    this.registerForm.reset();
                    this.valid_register_msg = res.message;
                  }
                  else {
                    this.invalid_register = true;
                    this.valid_register = false;
                    this.invalid_register_msg = res.message;
                  }
              });
            }
          else {
            this.invalid_register = true;
            this.valid_register = false;
            this.invalid_register_msg = res.message;
          }
        })
      }
    })
	}

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.invalid_register = false;
      const file = event.target.files[0];
      this.registerForm.patchValue({
        profilSource: file
      });
    }
  }
  onInputChange(event){
    this.invalid_register = false;
    this.valid_register = false;
  }

  isModerateur(role: Roles): boolean {
    if(role.idRole === 2) return true;
    else false;
 }
}
