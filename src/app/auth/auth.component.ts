import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';
@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

	authForm: FormGroup;
  verifyMailForm : FormGroup;
  repasswordForm : FormGroup;

  title = "Authentification";
  invalid_login = false;
  invalid_verify_mail = false;
  valid_change_password = false;
  invalid_change_password = false;

  isAuth = true;
  isVerifyMail = false;
  isChangePassword = false;

  email : AbstractControl;
  password : AbstractControl;

  email_verify :  AbstractControl;
  repassword : AbstractControl;
  minLength = 8;
  maxLength = 100;

  invalid_login_msg = '';
  invalid_verifyMail_msg = '';
  invalid_change_password_msg = '';
  valid_change_password_msg = '';

  email_valid = '';


  constructor(private router:Router, private formBuilder: FormBuilder, private service : Service) {

  }
	ngOnInit() {
    this.authForm = this.formBuilder.group({
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]]
    });

    this.verifyMailForm = this.formBuilder.group({
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
    this.repasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(this.minLength)]]
    });

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
    this.email_verify = this.verifyMailForm.controls['email'];
    this.repassword = this.repasswordForm.controls['password'];

	}
	auth(){
     let user = new Utilisateurs();
     user.emailUtilisateur =this.email.value;
     user.motdepasseUtilisateur = this.password.value;
     this.service.auth(user)
        .subscribe(reponse => {
          if(reponse != null && reponse.auth == true){
            this.invalid_login = false;
            this.authForm.reset();
            this.service.redirectHome(reponse);
          }
          else {
            this.invalid_login = true;
            this.invalid_login_msg = reponse.message;
          }
        })
	}
  formAuth(){
    this.isAuth = true;
    this.isVerifyMail = false;
    this.isChangePassword = false;
    this.authForm.reset();
    this.verifyMailForm.reset();
    this.repasswordForm.reset();
    this.invalid_verify_mail = false;
    this.invalid_change_password = false;
    this.valid_change_password = false;
    this.invalid_login = false;
  }
  formVerifyMail(){
    this.isAuth = false;
    this.isVerifyMail = true;
    this.isChangePassword = false;
    this.authForm.reset();
    this.verifyMailForm.reset();
    this.repasswordForm.reset();
  }
  formChangePassword(){
    this.isAuth = false;
    this.isVerifyMail = false;
    this.isChangePassword = true;
    this.authForm.reset();
    this.verifyMailForm.reset();
    this.repasswordForm.reset();
    this.invalid_verify_mail = false;
  }

  verifyMail(){
    let user = new Utilisateurs();
    user.emailUtilisateur = this.email_verify.value;
    this.service.check_mail(user).subscribe((value) =>{
      if(value.status){
        this.email_valid = this.email_verify.value;
        this.invalid_verify_mail = false;
        this.formChangePassword();
      }
      else{
        this.invalid_verify_mail = true;
        this.invalid_verifyMail_msg = value.message
      }
    })
  }

  updatePassword(){
    let user = new Utilisateurs();
    user.motdepasseUtilisateur = this.repassword.value;
    user.emailUtilisateur = this.email_valid;
    this.service.updatePasswordByEmail(user).subscribe((value) =>{
      if(value.status){
        this.valid_change_password = true;
        this.invalid_change_password = false;
        this.valid_change_password_msg = value.message;
      }
      else{
        this.invalid_change_password = true;
        this.valid_change_password = false;
        this.invalid_change_password_msg = value.message;
      }
    })
  }
}
