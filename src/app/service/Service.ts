import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Roles } from 'app/model/roles';
//import { JwtHelperService } from  '@auth0/angular-jwt';
import { Router } from '@angular/router';
//var helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = "http://localhost:8010/api";

  constructor(private http: HttpClient, private router:Router) { }

  //upload profil
  upload(form: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/upload",form);
  }

  //inscription moderateur
  register(user: Utilisateurs): Observable<any> {
    return this.http.post(this.baseUrl + "/inscription",user);
  }

  //
  check_mail(user: Utilisateurs): Observable<any> {
    return this.http.post(this.baseUrl + "/testDoublonMail",user);
  }

  //listRole
  listRole() : Observable<any> {
    return this.http.get(this.baseUrl + "/listRoles");
  }

  //auth
  auth(user: Utilisateurs): Observable<any> {
    return this.http.post(this.baseUrl + "/authentification",user);
  }

  //decode token pour avoir les info réel
  setInfoUserByToken(){
    var token = localStorage.getItem('access_token');
   /* var decodedToken = helper.decodeToken(token);
    localStorage.setItem('id', decodedToken.idUtilisateur);
    localStorage.setItem('nom', decodedToken.nomCompletUtilisateur);
    localStorage.setItem('role', decodedToken.idRole);*/
  }

  //test expiration token
  public get isExpiredToken(): boolean{
    var token = localStorage.getItem('access_token');
   /* var isExpired = helper.isTokenExpired(token);*/
    return true;
  }

  //resultat appel api login si ok
  redirectHome(reponse){
      localStorage.setItem('access_token', reponse.token);
      this.setInfoUserByToken()
      this.router.navigate(["/back"])
      .then(() => {
        window.location.reload();
      });
  }

  //logout
  logOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('nom');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    this.router.navigate(["/authentification"])
    .then(() => {
      window.location.reload();
    });
  }

  //test si connecté
  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }

}
