import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  urlProfil : any;
  nomUser : any;
  constructor(private service : Service) { }

  ngOnInit() {
    this.service.userConnecte(localStorage.getItem('id')).subscribe((value) => {
      this.urlProfil = this.service.urlProfil(value.result.profilUtilisateur);
      this.nomUser = value.result.nomCompletUtilisateur;
    });
  }
  logout(){
    this.service.logOut();
  }
}
