import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISort } from '../definitions/sorting.definitions';

import { ApiService } from './api.service';


@Injectable()
export class FavoritesService {
  readonly favorites$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  sort = { key: 'uploadDate', order: 'desc' };
  constructor(private readonly apiService: ApiService) { }

  adFavorites(favorites: number[]): void {
    if (!favorites.length) {
      return;
    }

    this.favorites$.next(favorites);
  }

  isFavorite(id: number): boolean {
    const favorites = this.favorites$.getValue();
    return (favorites?.indexOf(id) !== -1) || false;
  }

  addFavorites(favIds: number[]): void {
    if (!favIds.length) {
      return;
    }

    const favorites = [...this.favorites$.getValue()];
    favIds.forEach(favId => {
      if (!this.isFavorite(favId)) {
        favorites.push(favId);
      }
    });

    this.apiService.addFavorites$(favorites).pipe(
      catchError(err => {
        console.error('Hoppá! Hiba történt a kedvencek mentésekor.', err);
        return of(err);
      })
    ).subscribe(resp => {
      if (resp?.success) {
        this.favorites$.next(favorites)
      }
    })
  }

  removeFavorites(favIds: number[]): void {
    if (!favIds.length) {
      return;
    }

    const actFacorites = [...this.favorites$.getValue()];
    const newFavorites = actFacorites.filter(favId => !favIds.includes(favId));

    this.apiService.addFavorites$(newFavorites).pipe(
      catchError(err => {
        console.error('Hoppá! Hiba történt a kedvencek mentésekor.', err);
        return of(err);
      })
    ).subscribe(resp => {
      if (resp?.success) {
        this.favorites$.next(newFavorites)
      }
    })
  }

  getAdsSortingOrder$(): Observable<ISort> {
    return this.apiService.getAdsSortingOrder$().pipe(
      catchError(err => throwError(err)),
      tap((sortOrder: ISort) => {
        if (!!sortOrder){
          this.sort = sortOrder
        }
      })
    );
  }

  saveAdsSortingOrder$(sortOrder?: ISort): Observable<any> {
    const order = sortOrder || this.sort;
    return this.apiService.saveAdsSortingOrder$(order).pipe(
      catchError(err => throwError(err))
    )
  }
}
