import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

import { IAd } from 'src/app/core/definitions/ads.definitions';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdDetailsComponent implements OnInit {
  @Input() details: IAd;
  @Input() isFavorite = false;
  @Output('toggLeFavorite') toggLeFavorite: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onToggleFavoriteBtnClick() {
    this.toggLeFavorite.emit();
  }
}
