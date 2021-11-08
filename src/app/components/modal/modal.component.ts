import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  closeResult = '';

  mediumHandle : string = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open = (content : any) => {
    const modalRef = this.modalService.open(content,
      {
        ariaLabelledBy: 'modal-basic-title'
      }
    )
    modalRef.result.then((resolve) => {
      this.closeResult = `Closed with: ${resolve}`;
      //let inputval = (document.getElementById('musername') as HTMLInputElement).value;
      console.log(this.mediumHandle);
    }, (reject) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reject)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
