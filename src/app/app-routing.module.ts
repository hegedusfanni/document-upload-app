import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './core/components/home-page/home-page.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import {SignupComponent} from './signup/components/signup/signup.component';
import {LoginComponent} from './login/components/login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  {
    path: 'signup',
    // canload,
    children: [{ path: '', component: SignupComponent }],
  },
  // TODO
  {
    path: 'login',
    // TODO
    // canLoad: [],
    children: [{ path: '', component: LoginComponent}]
  },
  // {
  //   path: 'documents',
  //   // TODO
  //   // canload: []
  //   loadChildren: () => import('./documents/documents.module').then(l => l.DocumentsModule),
  // },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: '', component: LayoutComponent, children: routes }], {
    preloadingStrategy: PreloadAllModules,
    onSameUrlNavigation: 'reload'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
