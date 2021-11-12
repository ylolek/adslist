import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IContact } from 'src/app/core/definitions/ads.definitions';

@Component({
  selector: 'app-ad-contact-modal',
  templateUrl: './ad-contact-modal.component.html',
  styleUrls: ['./ad-contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdContactModalComponent implements OnInit {
  @Input() contactInfos: IContact;
  constructor() { }

  ngOnInit(): void {
  }

}
