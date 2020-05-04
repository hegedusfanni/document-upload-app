import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [LoginComponent],
  entryComponents: [LoginComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
