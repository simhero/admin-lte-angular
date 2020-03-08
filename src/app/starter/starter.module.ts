import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { ContentComponent } from './content/content.component';
import { ControlSideBarComponent } from './control-side-bar/control-side-bar.component';
import { MainSideBarComponent } from './main-side-bar/main-side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    StarterComponent,
    ContentComponent,
    ControlSideBarComponent,
    MainSideBarComponent,
    NavBarComponent,
    FooterComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,

  ],
  imports: [
    CommonModule,
    StarterRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StarterModule { }
