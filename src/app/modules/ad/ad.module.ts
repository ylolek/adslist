import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdComponent } from './ad.component';
import { adRoutes } from './ad.routing';



@NgModule({
  declarations: [
    AdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adRoutes)
  ]
})
export class AdModule { }
