import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

const STORAGE_KEY = 'adslist_favorites';
@Injectable()
export class ApiService {
  constructor() {}

  getAds$(): Observable<any> {
    const data = require('../../../assets/mock-jsons/ads.json');
    return of(data);
  }

  getFavorites$(): Observable<any> {
    try{
      const storedFavorites = localStorage.getItem(STORAGE_KEY);
      return of({ favorites: storedFavorites?.split(',')?.map(Number) })
    } catch(err) {
      return throwError(err);
    }
  }

  addFavorites$(favIds: number[]): Observable<any> {
    try {
      localStorage.setItem(STORAGE_KEY, favIds.toString());
      return of({ success: true });
    } catch(err) {
      return throwError(err);
    }
  }
}
