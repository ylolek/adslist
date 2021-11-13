import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { AdsService } from 'src/app/core/services/ads.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdDetailComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  adId: number;
  adData: IAd;
  isFavorite = false;
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService
  ) {
    this.adId = Number(this.route.snapshot?.params?.id);
    if (isNaN(this.adId)) {
      void this.router.navigate(['/', '404']);
    }
  }

  ngOnInit(): void {
    const adData = this.adsService.getAdsById([this.adId]);
    if (!adData.length) {
      void this.router.navigate(['/', '404']);
      return;
    }

    this.adData = adData[0];
    this.favoritesService.favorites$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(favorites => {
      this.isFavorite = favorites.includes(this.adId);
    });
  }

  toggLeFavorite() {
    if (this.isFavorite) {
      this.favoritesService.removeFavorites([this.adId]);
    } else {
      this.favoritesService.addFavorites([this.adId]);
    }
  }

  goBackBtnClick(): void {
    if (history.length > 2) {
      history.back();
      return;
    }

    void this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
