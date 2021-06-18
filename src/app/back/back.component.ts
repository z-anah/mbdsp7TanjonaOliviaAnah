import { Component, OnInit } from '@angular/core';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(private service : Service) { }

  ngOnInit() {
    /*if(this.service.isExpiredToken || !this.service.loggedIn) {
      this.service.logOut();
    }*/
  }
}
