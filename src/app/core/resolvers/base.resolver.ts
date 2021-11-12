import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { IBaseData } from '../definitions/base.definitions';


import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BaseResolver implements Resolve<IBaseData> {
  constructor(private readonly apiService: ApiService) {}

  resolve(): Observable<IBaseData> {
    return forkJoin({
      ads: this.apiService.getAds$(),
      favorites: this.apiService.getFavorites$()
    });
  }
}
