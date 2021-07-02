import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'app/service/Service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*message: string = "Are you sure?"
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  idAssignement:number;
  detail = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogDeleteComponent>, private service:Service,private router: Router) {
      if(data){
        this.message = data.message || this.message;
        this.detail = data.detail || this.detail;
        this.idAssignement = data.id;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onConfirmClick(): void {
    /*this.assignmentsService.getAssignment(this.idAssignement).subscribe((assignment) => {
      this.assignmentsService
      .deleteAssignment(assignment)
      .subscribe((deleted) => {
        // et on navigue vers la page d'accueil qui affiche la liste
        if(deleted){
          if(this.detail) this.router.navigate(["/home/rendu"]);
          else  window.location.reload();
          this.dialogRef.close();
        }
      });
    });
  }*/

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

