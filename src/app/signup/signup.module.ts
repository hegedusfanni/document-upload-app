import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [SignupComponent],
  entryComponents: [SignupComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SignupModule { }
