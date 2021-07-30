import { Component, OnInit } from '@angular/core';
import {JoueurService} from "../Function/Joueur.service";
import { Joueur } from '../Function/Joueur.model';
import { Equipe } from '../Function/Equipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import {Formation} from "../Function/Formation.model";
@Component({
  selector: 'app-detailequipe',
  templateUrl: './detailequipe.component.html',
  styleUrls: ['./detailequipe.component.css']
})
export class DetailequipeComponent implements OnInit {

  joueur : Joueur[];
  equipe: Equipe[];
  formation: Formation[];
  errorMessage:string;
  constructor(private joueurService:JoueurService,
  private route:ActivatedRoute,
  private router:Router) {}

  ngOnInit() {
    const id: number = this.route.snapshot.params.idequipe;
    this.getJoueurByEquipe(id);
  }

  getJoueurByEquipe(id: Number){
    this.joueurService.getJoueurByEquipe(id).subscribe(
      donner => {
       
        this.joueur = donner.docs;
        this.equipe = donner.docs[0]["Equipes"][0];
        this.formation = donner.docs[0]["Equipes"][0];
        console.log(this.formation)
      }, error => this.errorMessage = <any> error
    )
  }
}
