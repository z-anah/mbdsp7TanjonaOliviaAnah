import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
import { Equipe } from "./Equipe.model";
import {Joueur} from "./Joueur.model";

@Injectable({
  providedIn: "root",
})
export class EquipeService {
  equipe: Equipe[];

  constructor(private http: HttpClient) {}

  uri = "https://tpt-node.herokuapp.com/api/listeEquipe";
  getEquipe(page: number, limit: number): Observable<any> {
    return this.http.get<Equipe[]>(
      this.uri + "?page=" + page + "&limit=" + limit
    );
  }
}
