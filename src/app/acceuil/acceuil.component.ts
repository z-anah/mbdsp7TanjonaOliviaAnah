import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CompetitionService} from "../Function/Competition.service";
import { Competition } from '../Function/Competition.model';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  competition : Competition[];
  errorMessage:string;
   // on injecte le service de gestion des assignments
   constructor(private competitionService:CompetitionService,
    private route:ActivatedRoute,
    private router:Router) {}

  ngOnInit() {
   this.getCompetition();
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
