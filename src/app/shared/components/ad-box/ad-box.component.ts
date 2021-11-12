import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IAd } from 'src/app/core/definitions/ads.definitions';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Component({
  selector: 'app-ad-box',
  templateUrl: './ad-box.component.html',
  styleUrls: ['./ad-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdBoxComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() data: IAd;
  @Input() showDate = false;
  isFavorite = false;

  constructor(private readonly favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favoritesService.favorites$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(favorites => {
      this.isFavorite = favorites.includes(this.data?.adId);
    });
  }

  onToggleFavoriteBtnClick(): void {
    if (this.isFavorite) {
      this.favoritesService.removeFavorites([this.data?.adId]);
    } else {
      this.favoritesService.addFavorites([this.data?.adId]);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
