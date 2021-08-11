import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Joueur } from './Joueur.model';

@Injectable({
    providedIn: 'root'
  })
  export class JoueurService {

    joueur:Joueur[];

    constructor(private http:HttpClient) { }

    uri = "https://tpt-node.herokuapp.com/api/listeJoueurByEquipe";

    getJoueurByEquipe(id:Number):Observable<any> {
        return this.http.get<Joueur[]>(this.uri+"/"+id);
    }
}