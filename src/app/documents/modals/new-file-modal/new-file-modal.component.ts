import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-file-modal',
  templateUrl: './new-file-modal.component.html',
  styleUrls: ['./new-file-modal.component.scss']
})
export class NewFileModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
