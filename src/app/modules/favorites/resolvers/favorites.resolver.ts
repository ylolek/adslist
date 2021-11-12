import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ISort } from 'src/app/core/definitions/sorting.definitions';
import { FavoritesService } from 'src/app/core/services/favorites.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesResolver implements Resolve<ISort> {
  constructor(private readonly favoritesService: FavoritesService) { }
  resolve(): Observable<ISort> {
    return this.favoritesService.getAdsSortingOrder$();
  }
}
