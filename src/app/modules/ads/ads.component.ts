import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { AdsService } from 'src/app/core/services/ads.service';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  ads$: Observable<IAd[]>;

  constructor(private readonly adsService: AdsService) { }

  ngOnInit(): void {
    this.ads$ = this.adsService.ads$.pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
