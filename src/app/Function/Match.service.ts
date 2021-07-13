import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Matchs } from './Matchs.model';

@Injectable({
    providedIn: 'root'
  })
  export class MatchService {

    matchs:Matchs[];

    constructor(private http:HttpClient) { }

    uri = "http://localhost:5000/api";

    getMatchs(page:number, limit:number):Observable<any> {
        return this.http.get<Matchs[]>(this.uri+"/listeMatch?page="+page + "&limit="+limit);
    }
    getMatchsByID(id:number):Observable<any> {
      console.log(this.uri+"/listeMatchById/"+id)
      return this.http.get<Matchs[]>(this.uri+"/listeMatchById/"+id);
  }
}