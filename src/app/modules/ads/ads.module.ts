import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { RouterModule } from '@angular/router';

import { adsRoutes } from './ads.routing';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adsRoutes),
    SharedModule
  ]
})
export class AdsModule { }
