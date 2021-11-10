import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from './api.service';


@Injectable()
export class FavoritesService {
  readonly favorites$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor(private readonly apiService: ApiService) {}

  getFavorites(): void {
    this.apiService.getFavorites$().pipe(
      catchError(err => throwError(err))
    ).subscribe(resp => {
      this.favorites$.next(resp?.favorites || []);
    });
  }

  isFavorite(id: number): boolean {
    const favorites = this.favorites$.getValue();
    return (favorites?.indexOf(id) !== -1) || false;
  }

  addFavorites(favIds: number[]): boolean {
    let favorites = [...this.favorites$.getValue()];
    let favsNum = this.favorites$.getValue().length;
    favIds.forEach(favId => {
      if (!this.isFavorite(favId)) {
        favorites.push(favId);
      }
    });

    this.favorites$.next(favorites);
    return favorites.length > favsNum;
  }
}
