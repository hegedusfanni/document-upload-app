import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewFileModalComponent} from '../modals/new-file-modal/new-file-modal.component';
import {from, Observable, of } from 'rxjs';
import {HttpEventType} from '@angular/common/http';
import {concatMap, delay, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  mockArray = [{type: HttpEventType.Sent},
    {type: HttpEventType.UploadProgress, loaded: 20, total: 100},
    {type: HttpEventType.UploadProgress, loaded: 40, total: 100},
    {type: HttpEventType.UploadProgress, loaded: 80, total: 100},
    {type: HttpEventType.Response, status: 200}];

  constructor(private modalService: NgbModal) {}

  fileUpload = () => {
    this.modalService.open(NewFileModalComponent);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('files', file, file.name);
    // TODO: mentés
    // HTTP keres lenne, mock lesz
    return from(this.mockArray).pipe(concatMap(val => of(val).pipe(delay(300))));
  }
}
