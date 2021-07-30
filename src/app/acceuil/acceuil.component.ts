import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatchService} from "../Function/Match.service";
import { Matchs } from '../Function/Matchs.model';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  
  matchs : Matchs[];
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
   // on injecte le service de gestion des assignments
   constructor(
    private matchService:MatchService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit() {
   this.getProchainMatch();
  }

 
  getProchainMatch() {
    this.matchService.getProchainMatch(this.page, this.limit).subscribe(
      donner => {
        console.log(donner)
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
    this.getProchainMatch();
  } 
}
