import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IAd } from 'src/app/core/definitions/ads.definitions';

@Component({
  selector: 'app-ad-box',
  templateUrl: './ad-box.component.html',
  styleUrls: ['./ad-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdBoxComponent implements OnInit {
  @Input() data: IAd;
  constructor() { }

  ngOnInit(): void {
  }

}
