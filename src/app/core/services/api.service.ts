import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ApiService {
  constructor() {}

  getAds$(): Observable<any> {
    const data = require('../../../assets/mock-jsons/ads.json');
    return of(data);
  }

  getFavorites$(): Observable<any> {
    /*return of({
      favorites: localStorage.getItem('adslist_favorites') || []
    });*/
    return of({
      favorites: [2101]
    });
  }

  addFavorites$(favIds: number[]): Observable<any> {
    //localStorage.setItem('adslist_favorites', favIds);
    return of();
  }
}
