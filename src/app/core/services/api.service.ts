import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISort } from '../definitions/sorting.definitions';

const STORAGE_KEY_FAVS = 'adslist_favorites';
const STORAGE_KEY_FAVS_ORDER = 'adslist_favorites_order';

@Injectable()
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getAds$(): Observable<any> {
    return this.http.get('../../../assets/mock-jsons/ads.json');
  }

  getFavorites$(): Observable<any> {
    try{
      const storedFavorites = localStorage.getItem(STORAGE_KEY_FAVS);
      return of({ favorites: storedFavorites?.split(',')?.map(Number) })
    } catch(err) {
      return throwError(err);
    }
  }

  addFavorites$(favIds: number[]): Observable<any> {
    try {
      localStorage.setItem(STORAGE_KEY_FAVS, favIds.toString());
      return of({ success: true });
    } catch(err) {
      return throwError(err);
    }
  }

  getAdsSortingOptions$(): Observable<any> {
    return this.http.get('../../../assets/mock-jsons/ads-sort.json');
  }

  getAdsSortingOrder$(): Observable<ISort> {
    try{
      const storedFavsOrder = localStorage.getItem(STORAGE_KEY_FAVS_ORDER);
      return (!!storedFavsOrder ? of(JSON.parse(storedFavsOrder)) : of(null));
    } catch(err) {
      return throwError(err);
    }
  }

  saveAdsSortingOrder$(sortOption: ISort): Observable<any> {
    if (!sortOption) {
      return of({ success: false });
    }

    try{
      localStorage.setItem(STORAGE_KEY_FAVS_ORDER, JSON.stringify(sortOption));
      return of({ success: true });
    } catch(err) {
      return throwError(err);
    }
  }
}
