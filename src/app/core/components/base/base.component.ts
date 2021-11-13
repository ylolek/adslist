import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdsService } from '../../services/ads.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    const ads = this.route.snapshot.data?.data?.ads;
    const favorites = this.route.snapshot.data?.data?.favorites;
    this.adsService.addAds(ads)
    this.favoritesService.adFavorites(favorites);
  }
}
