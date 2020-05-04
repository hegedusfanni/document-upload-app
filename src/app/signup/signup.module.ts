import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [SignupComponent],
  entryComponents: [SignupComponent],
  imports: [
    CommonModule
  ]
})
export class SignupModule { }
