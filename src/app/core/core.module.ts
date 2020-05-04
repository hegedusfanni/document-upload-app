import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppRoutingModule } from '../app-routing.module';
import {SignupModule} from '../signup/signup.module';
import {SharedModule} from '../shared/shared.module';
import {LoginModule} from '../login/login.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomePageComponent, LayoutComponent, NavMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SignupModule,
    SharedModule,
    LoginModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreModule { }
