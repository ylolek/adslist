import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdBoxComponent } from './components/ad-box/ad-box.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { AdsSortControlComponent } from './components/ads-sort-control/ads-sort-control.component';
import { AdsSortSerice } from './services/ads-sort.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdBoxComponent,
    SideMenuComponent,
    AdsSortControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdBoxComponent,
    SideMenuComponent,
    AdsSortControlComponent
  ],
  providers: [
    AdsSortSerice
  ]
})
export class SharedModule { }
