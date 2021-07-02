import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {

  lists:Utilisateurs[];

  page: number=1;
  limit: number = 10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  count:number = 0;
  tableSizes = [10, 15, 20];
  urlDownload : any;

  constructor(private route:ActivatedRoute, private service : Service) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // console.log("Dans le subscribe des queryParams")
          this.page = +queryParams.page || 1;
          this.limit = +queryParams.limit || 5;
      });
      this.getListClient();
      this.urlDownload = this.service.urlDownload();
  }
  getListClient() {
    this.service.listClient(this.page, this.limit)
      .subscribe(data => {
      this.lists = data.result.docs;
      this.page = data.result.page;
      this.limit = data.result.limit;
      this.totalDocs = data.result.totalDocs;
      this.count = data.result.totalDocs;
      this.totalPages = data.result.totalPages;
      this.hasPrevPage = data.result.hasPrevPage;
      this.prevPage = data.result.prevPage;
      this.hasNextPage = data.result.hasNextPage;
      this.nextPage = data.result.nextPage;
    });
  }

  tabSize(event){
    this.page = event;
    this.getListClient();
  }

  tableData(event): void {
    this.limit = event.target.value;
    this.page = 1;
    this.getListClient();
  }

}
