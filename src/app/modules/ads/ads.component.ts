import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { AdsService } from 'src/app/core/services/ads.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';


@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  ads$: Observable<IAd[]>;
  favorites$: Observable<number[]>;

  constructor(
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.ads$ = this.adsService.ads$.pipe(takeUntil(this.destroy$));
    this.favorites$ = this.favoritesService.favorites$.pipe(takeUntil(this.destroy$));

    setTimeout(() => {
      console.log(this.favoritesService.addFavorites([2101]));
    }, 2500);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
