import { Component } from '@angular/core';
import { AdsService } from './core/services/ads.service';
import { FavoritesService } from './core/services/favorites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adslist';
  constructor(
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService
  ) {
    this.adsService.getAds();
    this.favoritesService.getFavorites();
  }
}
