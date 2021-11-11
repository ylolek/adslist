import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { AdsService } from 'src/app/core/services/ads.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  favorites: IAd[];
  constructor(
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.favoritesService.favorites$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(favorites => {
      this.favorites = this.adsService.getAdsById(favorites);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
