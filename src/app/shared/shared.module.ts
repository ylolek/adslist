import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdBoxComponent } from './ad-box/ad-box.component';



@NgModule({
  declarations: [
    AdBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      AdBoxComponent
  ]
})
export class SharedModule { }