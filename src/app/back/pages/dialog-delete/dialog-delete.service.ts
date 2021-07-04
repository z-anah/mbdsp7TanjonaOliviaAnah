import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogDeleteComponent } from './dialog-delete.component';

@Injectable({
  providedIn: 'root'
})
export class DialogDeleteService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    btnOkText: string = 'Oui',
    btnCancelText: string = 'Non',
    dialogSize: 'lg'|'lg' = 'lg'): Promise<boolean> {
    const modalRef = this.modalService.open(DialogDeleteComponent, { size: dialogSize });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}
