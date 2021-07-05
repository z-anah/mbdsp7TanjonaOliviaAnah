import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EquipeService} from "../Function/Equipe.service";
import { Equipe } from '../Function/Equipe.model';
@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  equipe : Equipe[];
  errorMessage:string;
  page: number=1;
  limit: number = 2;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  count:number = 0;
  tableSizes = [20, 25, 30, 40];

   constructor(private equipeService:EquipeService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit() {

    this.route.queryParams.subscribe(queryParams => {
      // console.log("Dans le subscribe des queryParams")
          this.page = +queryParams.page || 1;
          this.limit = +queryParams.limit || 2;
      });
    this.getEquipe()
  }

  getEquipe(){
    this.equipeService.getEquipe(this.page, this.limit).subscribe(
      donner => {
        this.equipe = donner.docs;
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
    this.getEquipe();
  }  
}
