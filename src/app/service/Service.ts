import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Roles } from 'app/model/roles';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private baseUrl = "http://localhost:8010/api";

  constructor(private http: HttpClient) { }

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
}
