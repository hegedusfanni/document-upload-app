import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import {SharedModule} from '../shared/shared.module';
import {DocumentsRoutingModule} from './documents-routing.module';
import { NewFileModalComponent } from './modals/new-file-modal/new-file-modal.component';
import { DocumentsWrapperComponent } from './components/documents-wrapper/documents-wrapper.component';
import {FileUploadStoreModule} from '../file-upload-store/file-upload-store.module';



@NgModule({
  declarations: [AllDocumentsComponent, NewFileModalComponent, DocumentsWrapperComponent],
  entryComponents: [AllDocumentsComponent, NewFileModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule,
    FileUploadStoreModule
  ]
})
export class DocumentsModule { }
