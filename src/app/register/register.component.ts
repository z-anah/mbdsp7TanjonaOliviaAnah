import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  listRole = [
    { id: 1, name: "Administrateur" },
    { id: 2, name: "Modérateur" }
  ];
	registerForm: FormGroup;

  title = "Inscription";
  invalid_login = false;
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

  constructor(private router:Router, private formBuilder: FormBuilder) {
  }

	ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nomComplet: ['', [Validators.required, Validators.minLength(this.maxLength)]],
      email :['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      repassword: ['', [Validators.required, Validators.minLength(this.minLength)]],
      role: [null, [Validators.required]],
      profil: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
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
    //let user = new User();
    //user.username = this.loginForm.value.username;
    //user.password = this.loginForm.value.password;
      /*this.registerService.logIn(user)
        .subscribe(reponse => {
          if(reponse != null && reponse.register == true){
            this.invalid_login = false;
            this.registerService.redirectHome(reponse);
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
