import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Roles } from 'app/model/roles';
import { JwtHelperService } from  '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
var helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class Service {
 //private baseUrl = "http://localhost:5000/api";
  private baseUrl = "https://tpt-node.herokuapp.com/api";

  private admin = 1;

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
    var decodedToken = helper.decodeToken(token);
    localStorage.setItem('id', decodedToken.id);
  }

  //test expiration token
  public get isExpiredToken(): boolean{
    var token = localStorage.getItem('access_token');
    var isExpired = helper.isTokenExpired(token);
    return isExpired;
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
    localStorage.removeItem('id');

    this.router.navigate(["/authentification"]);
  }

  //test si connecté
  public get loggedIn(): boolean{
    if(localStorage.getItem('access_token') !==  null) return true;
    else return false;
  }

  isAdmin() {
    if(parseInt(localStorage.getItem("roles")) == this.admin) return true;
    else return false;
  }

  userConnecte(id : any):Observable<any> {
    return this.http.get(this.baseUrl + "/user/"+id);
  }

  userById(id : any):Observable<any> {
    return this.http.get(this.baseUrl + "/user/"+id);
  }

  urlProfil(profilName:any){
    return this.baseUrl+"/download/"+profilName;
  }
  urlDownload(){
    return this.baseUrl+"/download/";
  }

  updateUser(user: Utilisateurs):Observable<any>{
    return this.http.put(this.baseUrl + "/modification",user);
  }
  updatePasswordByEmail(user: Utilisateurs):Observable<any>{
    return this.http.put(this.baseUrl + "/forgotPassword",user);
  }

  deleteProfilFile(profilName:any) :Observable<any> {
    return this.http.get(this.baseUrl+"/deleteProfil/"+profilName);
  }
  changePassword(user: Utilisateurs) :Observable<any> {
    return this.http.put(this.baseUrl+"/changePassword",user);
  }

  listModerateur(page:number, limit:number) :Observable<any>{
    return this.http.get(this.baseUrl+"/listModerateurs"+"?page="+page + "&limit="+limit);
  }

}
