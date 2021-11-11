import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
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

  addFavorites(favIds: number[]): void {
    if (!favIds.length) {
      return;
    }

    let favorites = [...this.favorites$.getValue()];
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
}
