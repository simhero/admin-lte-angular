import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {Dashboard2Component} from './dashboard2/dashboard2.component';
import {Dashboard3Component} from './dashboard3/dashboard3.component';


const routes: Routes = [

  // {path: 'register', component: RegisterComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: '',
    component: StarterComponent,
    children: [
      {path: 'dashboard1', component: Dashboard1Component},
      {path: 'dashboard2', component: Dashboard2Component},
      {path: 'dashboard3', component: Dashboard3Component},
      {
        path: '',
        component: ContentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
