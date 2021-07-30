import { Component, OnInit } from '@angular/core';
import {MatchService} from "../Function/Match.service";
import { Matchs } from '../Function/Matchs.model';
import {CompetitionService} from "../Function/Competition.service";
import { Competition } from '../Function/Competition.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  matchs : Matchs[];
  competition : Competition[];
  errorMessage:string;
  page: number=1;
  limit: number = 4;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  count:number = 0;
  tableSizes = [20, 25, 30, 40];

   constructor(private matchService:MatchService,
    private route:ActivatedRoute,
    private competitionService:CompetitionService,
    private router:Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      // console.log("Dans le subscribe des queryParams")
          this.page = +queryParams.page || 1;
          this.limit = +queryParams.limit || 4;
      });
      const id: Number = this.route.snapshot.params.idCompetition;
    
      this.getMatch()
     
      this.getCompetition()
  }
  getMatch() {
    this.matchService.getMatchs(this.page, this.limit).subscribe(
      donner => {
        this.matchs = donner.docs;
        this.page = donner.page;
        this.limit = donner.limit;
        this.totalDocs = donner.totalDocs;
        this.count = donner.totalDocs;
        this.totalPages = donner.totalPages;
        this.hasPrevPage = donner.hasPrevPage;
        this.prevPage = donner.prevPage;
        this.hasNextPage = donner.hasNextPage;
        this.nextPage = donner.nextPage;
      }, error => this.errorMessage = <any> error);
  }
  tabSize(event){
    
    this.page = event;
    console.log(this.page);
    this.getMatch();
  } 
  getCompetition(){
    this.competitionService.getCompetitions() .subscribe(
      donner => {
        console.log(donner["data"]);
        this.competition = donner["data"];
        console.log(this.competition);
      }, error => this.errorMessage = <any> error);
  }
}
