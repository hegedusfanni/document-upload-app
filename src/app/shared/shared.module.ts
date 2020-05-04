import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClickDirective} from './directives/click.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ClickDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ClickDirective,
    FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
