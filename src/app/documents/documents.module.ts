import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDocumentsComponent } from './components/all-documents/all-documents.component';
import {SharedModule} from '../shared/shared.module';
import {DocumentsRoutingModule} from './documents-routing.module';



@NgModule({
  declarations: [AllDocumentsComponent],
  entryComponents: [AllDocumentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule
  ]
})
export class DocumentsModule { }
