import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ad-images',
  templateUrl: './ad-images.component.html',
  styleUrls: ['./ad-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdImagesComponent {
  @Input() images: string[];
  constructor() { }
}
