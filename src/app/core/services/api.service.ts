import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable()
export class ApiService {
  constructor() {}

  getAdList$(): Observable<any> {
    const data = require('../../../assets/mock-jsons/ads.json');
    return of(data);
  }

  getFavorites$(): Observable<any> {
    return of({
      favorites: localStorage.getItem('adslist_favorites') || []
    });
  }

  addFavorites$(favIds: number[]): Observable<any> {
    //localStorage.setItem('adslist_favorites', favIds);
    return of();
  }
}