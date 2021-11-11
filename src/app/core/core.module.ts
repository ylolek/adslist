import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error-pages/error404/error404.component';
import { ApiService } from './services/api.service';
import { AdsService } from './services/ads.service';
import { FavoritesService } from './services/favorites.service';

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
  ],
  providers: [
    ApiService,
    AdsService,
    FavoritesService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('Import CoreModule only once, in AppModule!');
    }
  }
 }
