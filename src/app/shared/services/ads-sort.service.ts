import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ISort, ISortOption } from 'src/app/core/definitions/sorting.definitions';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable()
export class AdsSortSerice {
  adsSortOrder$: Subject<ISort> = new Subject<ISort>();
  constructor(private readonly apiService: ApiService) {}

  getSortOptions$(): Observable<ISortOption[]> {
    return this.apiService.getAdsSortingOptions$().pipe(
      catchError(err => throwError(err)),
      map(resp => resp?.adsSort)
    )
  }

  onSortOrderChanged(order: string): void {
    const sort = order.split('_');
    if (sort.length !== 2) {
      return;
    }

    this.adsSortOrder$.next({ key: sort[0], order: sort[1] });
  }
}
