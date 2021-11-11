import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AdsService } from './core/services/ads.service';
import { FavoritesService } from './core/services/favorites.service';
import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  title = 'adslist';
  constructor(
    private readonly router: Router,
    private readonly adsService: AdsService,
    private readonly favoritesService: FavoritesService,
    private readonly headerService: HeaderService
  ) {
    this.adsService.getAds();
    this.favoritesService.getFavorites();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(events => events instanceof NavigationStart)
    ).subscribe(_ => { this.headerService.closeMenu() });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
