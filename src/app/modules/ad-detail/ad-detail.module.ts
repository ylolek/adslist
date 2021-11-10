import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdDetailComponent } from './ad-detail.component';
import { adDetailRoutes } from './ad-detail.routing';



@NgModule({
  declarations: [
    AdDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adDetailRoutes)
  ]
})
export class AdDetailModule { }
