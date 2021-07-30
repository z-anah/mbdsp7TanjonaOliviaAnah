import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable, of } from "rxjs";
import { catchError, filter, map, tap } from "rxjs/operators";
import { Competition } from "./Competition.model";

@Injectable({
  providedIn: "root",
})
export class CompetitionService {
  competitions: Competition[];

  constructor(private http: HttpClient) {}
 
  //uri = "https://tpt-node.herokuapp.com/api/listeCompetition";
  uri = " http://localhost:5000/api/listeCompetition";

  getCompetitions(): Observable<Competition[]> {
    //return of(this.Competition);
    console.log("arooooo" + this.http.get<Competition[]>(this.uri));
    return this.http.get<Competition[]>(this.uri);
  }
}
