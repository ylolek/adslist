import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

import { IAd } from 'src/app/core/definitions/ads.definitions';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdDetailsComponent {
  @Input() details: IAd;
  @Input() isFavorite = false;
  @Output() toggLeFavorite: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onToggleFavoriteBtnClick() {
    this.toggLeFavorite.emit();
  }
}
