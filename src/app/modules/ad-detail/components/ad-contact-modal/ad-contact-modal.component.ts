import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IContact } from 'src/app/core/definitions/ads.definitions';

@Component({
  selector: 'app-ad-contact-modal',
  templateUrl: './ad-contact-modal.component.html',
  styleUrls: ['./ad-contact-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdContactModalComponent {
  @Input() contactInfos: IContact;
  constructor() { }
}
