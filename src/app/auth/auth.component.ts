import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  listRole = [
    { id: 1, name: "Administrateur" },
    { id: 2, name: "Modérateur" }
  ];
	authForm: FormGroup;

  title = "Authentification";
  invalid_login = false;
  invalid_register = false;
  valid_register = false;

  email : AbstractControl;
  password : AbstractControl;
  role : AbstractControl;
  minLength = 8;
  maxLength = 100;
  valid_register_msg = '';
  invalid_register_msg = '';

  constructor(private router:Router, private formBuilder: FormBuilder) {

  }
	ngOnInit() {
    this.authForm = this.formBuilder.group({
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      role: [null, [Validators.required]]
    });

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
    this.role = this.authForm.controls['role'];
	}
	auth(){
    //let user = new User();
    //user.username = this.loginForm.value.username;
    //user.password = this.loginForm.value.password;
      /*this.authService.logIn(user)
        .subscribe(reponse => {
          if(reponse != null && reponse.auth == true){
            this.invalid_login = false;
            this.authService.redirectHome(reponse);
          }
          else {
            this.invalid_login = true;
            this.router.navigate(["/login"]);
          }
        });*/
		this.router.navigate(["/back"])
			.then(() => {
				window.location.reload();
			});
	}

}
