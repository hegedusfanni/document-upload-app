import {Component, OnDestroy, OnInit} from '@angular/core';
import {FileUploadService} from '../../services/file-upload.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.scss']
})
export class AllDocumentsComponent implements OnInit, OnDestroy {
  private fileUploaded: Subscription;
  files = [];

  constructor(private fileService: FileUploadService) { }

  ngOnInit() {
    this.getFiles();
    this.fileUploaded = this.fileService.indexCounter$.subscribe(val => {
      console.log(val);
      // TODO: JSON parse
      this.files.push(val);
    });
  }

  getFiles() {
    for (let i = 0; i < 11; i++) {
      // TODO: JSON parse
      // JSON.parse(localStorage.getItem(i.toString()) )
      const file =  localStorage.getItem(i.toString());

      if (file) {
        this.files.push(i);
      }
    }
  }

  ngOnDestroy(): void {
    this.fileUploaded.unsubscribe();
  }

}
