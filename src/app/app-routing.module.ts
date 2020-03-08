import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// ↓ 추가
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


export const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  },
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // ↓ 추가
    RouterModule.forRoot(routes)
  ],
  // ↓ 추가
  exports: [RouterModule],
})
export class AppRoutingModule {
}
