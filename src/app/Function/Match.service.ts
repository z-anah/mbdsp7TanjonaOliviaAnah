import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, identity, Observable, of } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
import { Matchs } from "./Matchs.model";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  matchs: Matchs[];

  constructor(private http: HttpClient) {}

  uri = "https://tpt-node.herokuapp.com/api";

  getMatchs(page: number, limit: number): Observable<any> {
    return this.http.get<Matchs[]>(
      this.uri + "/listeMatch?page=" + page + "&limit=" + limit
    );
  }
  getMatchsByID(id: number): Observable<any> {
    console.log(this.uri + "/listeMatchById/" + id);
    return this.http.get<Matchs[]>(this.uri + "/listeMatchById/" + id);
  }
  getProchainMatch(page: number, limit: number): Observable<any> {
    return this.http.get<Matchs[]>(
      this.uri + "/topMatch?page=" + page + "&limit=" + limit
    );
  }
  getMatchsByCompetition(id: number,page: number, limit: number): Observable<any> {
    return this.http.get<Matchs[]>(
      this.uri + "/listeMatchByCompetition/"+id+"?page=" + page + "&limit=" + limit
    );
  }
}
