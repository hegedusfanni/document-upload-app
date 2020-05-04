import {RouterModule, Routes} from '@angular/router';
import {AllDocumentsComponent} from './components/all-documents/all-documents.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: AllDocumentsComponent },
  { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
