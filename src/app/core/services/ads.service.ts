import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IAd } from '../definitions/ads.definitions';
import { TSortKeys, TSortOrder } from '../definitions/sorting.definitions';
import { ApiService } from './api.service';


@Injectable()
export class AdsService {
  readonly ads$: BehaviorSubject<IAd[]> = new BehaviorSubject<IAd[]>([]);

  constructor(private readonly apiService: ApiService) {}

  addAds(ads: IAd[]): void {
    if (!ads.length) {
      return;
    }

    this.ads$.next(this.sortAds('uploadDate', 'desc', ads));
  }

  getAdsById(adIds: number[]): IAd[] | [] {
    if (!adIds.length) {
      return [];
    }

    const actAds = [...this.ads$.getValue()];
    const filteredAds = actAds.filter(actAd => adIds.includes(actAd?.adId));

    return filteredAds;
  }

  sortAds(key: TSortKeys, order: TSortOrder, ads?: IAd[]): IAd[] {
    const sortAds = (!!ads ? [...ads] : [...this.ads$.getValue()]);

    switch(order) {
      case 'asc':
        return sortAds.sort((a: any, b: any) => a[key].localeCompare(b[key]));
        break;
      case 'desc':
        return sortAds.sort((a: any, b: any) => b[key].localeCompare(a[key]));
        break;
      default:
        return sortAds;
    }
  }
}
