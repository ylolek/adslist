import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IAd } from '../definitions/ads.definitions';
import { ApiService } from './api.service';


@Injectable()
export class AdsService {
  readonly ads$: BehaviorSubject<IAd[]> = new BehaviorSubject<IAd[]>([]);

  constructor(private readonly apiService: ApiService) {}

  getAds(): void {
    this.apiService.getAds$().pipe(
      catchError(err => throwError(err))
    ).subscribe(resp => {
      this.ads$.next(resp?.ads || []);
    });
  }

  getAdsById(adIds: number[]): IAd[] | [] {
    if (!adIds.length) {
      return []
    }

    const actAds = [...this.ads$.getValue()];
    const filteredAds = actAds.filter(actAd => adIds.includes(actAd?.adId));

    console.log('filteredAds', filteredAds);
    return filteredAds;
  }
}
