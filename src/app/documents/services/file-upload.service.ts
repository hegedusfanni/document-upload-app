import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NewFileModalComponent} from '../modals/new-file-modal/new-file-modal.component';
import {BehaviorSubject, from, Observable, of, Subject} from 'rxjs';
import {HttpEventType} from '@angular/common/http';
import {concatMap, delay, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  indexCounter = new Subject<number>();
  indexCounter$ = this.indexCounter.asObservable();

  validFileTypes = ['jpg', 'jpeg', 'png', 'pdf'];

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
    const format = file.name.split('.').pop();
    if (this.validFileTypes.indexOf(format) > -1) {
      if ( format === 'pdf') {
        this.savePdf(file);
      } else {
        this.saveImage(file);
      }
    }
    // HTTP keres lenne, mock lesz
    return from(this.mockArray).pipe(concatMap(val => of(val).pipe(delay(300))));
  }

  savePdf(file: File) {
    // TODO
  }

  saveImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () => {
      const newId = Math.floor(Math.random() * 10) + 1;
      this.indexCounter.next( newId );
      localStorage.setItem(newId.toString(), reader.result.toString());
    };
  }
}
