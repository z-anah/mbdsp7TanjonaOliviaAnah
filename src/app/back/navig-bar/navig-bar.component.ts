import { Component, OnInit } from '@angular/core';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-navig-bar',
  templateUrl: './navig-bar.component.html',
  styleUrls: ['./navig-bar.component.css']
})
export class NavigBarComponent implements OnInit {

  isAdmin : any;
  constructor(private service : Service) { }

  ngOnInit() {
    this.service.isAdmin().subscribe((value) =>{
      if(parseInt(localStorage.getItem("role")) == parseInt(value.idRole)) this.isAdmin = true;
      else this.isAdmin =  false;
    })
  }

}
