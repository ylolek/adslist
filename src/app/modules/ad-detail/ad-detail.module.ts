import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdDetailComponent } from './ad-detail.component';
import { adDetailRoutes } from './ad-detail.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { AdImagesComponent } from './components/ad-images/ad-images.component';
import { AdContactModalComponent } from './components/ad-contact-modal/ad-contact-modal.component';



@NgModule({
  declarations: [
    AdDetailComponent,
    AdDetailsComponent,
    AdImagesComponent,
    AdContactModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adDetailRoutes),
    SharedModule
  ]
})
export class AdDetailModule { }
