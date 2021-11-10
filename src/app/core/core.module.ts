import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error-pages/error404/error404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('Import CoreModule only once, in AppModule!');
    }
  }
 }
