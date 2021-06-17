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

  title = "Authentification";
  invalid_login = false;
  
  email : AbstractControl;
  password : AbstractControl;
  minLength = 8;
  maxLength = 100;

  invalid_login_msg = '';

  constructor(private router:Router, private formBuilder: FormBuilder, private service : Service) {

  }
	ngOnInit() {
    this.authForm = this.formBuilder.group({
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]]
    });

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
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
}
