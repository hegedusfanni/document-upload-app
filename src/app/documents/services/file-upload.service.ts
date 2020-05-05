import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewFileModalComponent} from '../modals/new-file-modal/new-file-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private modalService: NgbModal) { }

  fileUpload = () => {
    this.modalService.open(NewFileModalComponent);
  }
}
