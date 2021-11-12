import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-images',
  templateUrl: './ad-images.component.html',
  styleUrls: ['./ad-images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdImagesComponent implements OnInit {
  @Input() images: string[];
  constructor() { }

  ngOnInit(): void {
  }
}
