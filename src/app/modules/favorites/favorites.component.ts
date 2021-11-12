import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, take, takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { ISort } from 'src/app/core/definitions/sorting.definitions';
import { AdsService } from 'src/app/core/services/ads.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';
import { AdsSortSerice } from 'src/app/shared/services/ads-sort.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  favorites: IAd[];
  sortOrder: ISort;
  constructor(
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService,
    private readonly adsSortService: AdsSortSerice
  ) { }

  ngOnInit(): void {
    this.favoritesService.getAdsSortingOrder$().pipe(
      takeUntil(this.destroy$)
    ).subscribe(order => this.sortOrder = order || this.favoritesService.sort);

    this.favoritesService.favorites$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(favorites => {
      this.favorites = this.adsService.sortAds(
        this.favoritesService.sort.key,
        this.favoritesService.sort.order,
        this.adsService.getAdsById(favorites));
    });

    this.adsSortService.adsSortOrder$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(sortOrder => {
      this.favoritesService.sort = { key: sortOrder.key, order: sortOrder.order };
      this.favorites = this.adsService.sortAds(sortOrder.key, sortOrder.order, this.favorites);
    });
  }

  ngOnDestroy(): void {
    this.favoritesService.saveAdsSortingOrder$().pipe(takeUntil(this.destroy$));

    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
