import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateurs } from 'app/model/utilisateurs';
import { Service } from 'app/service/Service';
import { DialogDeleteComponent } from '../../dialog-delete/dialog-delete.component';
import { DialogDeleteService } from '../../dialog-delete/dialog-delete.service';

@Component({
  selector: 'app-list-moderator',
  templateUrl: './list-moderator.component.html',
  styleUrls: ['./list-moderator.component.css']
})
export class ListModeratorComponent implements OnInit {

  lists:Utilisateurs[];

  page: number=1;
  limit: number = 5;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;
  count:number = 0;
  tableSizes = [5, 10, 15, 20];
  urlDownload : any;

  constructor(private route:ActivatedRoute, private service : Service,private confirmationDeleteService: DialogDeleteService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      // console.log("Dans le subscribe des queryParams")
          this.page = +queryParams.page || 1;
          this.limit = +queryParams.limit || 5;
      });
      this.getListModerateur();
      this.urlDownload = this.service.urlDownload();
  }
  getListModerateur() {
    this.service.listModerateur(this.page, this.limit)
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
    this.getListModerateur();
  }

  tableData(event): void {
    this.limit = event.target.value;
    this.page = 1;
    this.getListModerateur();
  }
  openConfirmationDialog(id,profil) {
    this.confirmationDeleteService.confirm('Confirmation de suppression', 'Voulez-vous vraiment supprimer cet modérateur ?')
    .then((confirmed) =>{
      var newUser = new Utilisateurs();
      newUser.idUtilisateur = parseInt(id);
      this.service.deleteModerateur(newUser).subscribe((value) => {
        if(value.deleted){
          this.service.deleteProfilFile(profil).subscribe(response =>{
            if(response.fileDeleted) window.location.reload();
            window.location.reload();
          })
        }
      })
    })
  }
}
