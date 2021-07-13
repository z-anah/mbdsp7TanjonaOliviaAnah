import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatchService} from "../Function/Match.service";
import { Matchs } from '../Function/Matchs.model';

@Component({
  selector: 'app-detaile-match',
  templateUrl: './detaile-match.component.html',
  styleUrls: ['./detaile-match.component.css']
})
export class DetaileMatchComponent implements OnInit {

  matchs : Matchs[];
  errorMessage:string;
  constructor(
    private matchService:MatchService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id: number = this.route.snapshot.params.id;
    this.matchService.getMatchsByID(id).subscribe(
      donner => {
        this.matchs = donner.docs;
        console.log(this.matchs)
      }, error => this.errorMessage = <any> error);
  }
}
