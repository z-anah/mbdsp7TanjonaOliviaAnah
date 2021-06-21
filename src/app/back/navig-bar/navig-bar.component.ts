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
    this.isAdmin  = this.service.isAdmin();
  }

}
