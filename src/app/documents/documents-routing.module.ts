import {RouterModule, Routes} from '@angular/router';
import {AllDocumentsComponent} from './components/all-documents/all-documents.component';
import {NgModule} from '@angular/core';
import {DocumentsWrapperComponent} from './components/documents-wrapper/documents-wrapper.component';

const routes: Routes = [
  { path: '', component: DocumentsWrapperComponent },
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
