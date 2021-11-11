import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdBoxComponent } from './components/ad-box/ad-box.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdBoxComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdBoxComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
