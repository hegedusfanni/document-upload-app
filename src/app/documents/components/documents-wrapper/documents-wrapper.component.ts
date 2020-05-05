import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {FileUploadService} from '../../services/file-upload.service';

@Component({
  selector: 'app-documents-wrapper',
  templateUrl: './documents-wrapper.component.html',
  styleUrls: ['./documents-wrapper.component.scss']
})
export class DocumentsWrapperComponent implements OnInit {

  constructor(public authService: AuthService, private fileService: FileUploadService) { }

  ngOnInit() {
  }


  onFileUpload() {
    this.fileService.fileUpload();
  }

}
