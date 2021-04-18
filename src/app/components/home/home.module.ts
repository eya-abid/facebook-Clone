import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    FormsModule
  ]
})
export class HomeModule { }
