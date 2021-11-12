import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ISort, ISortOption } from 'src/app/core/definitions/sorting.definitions';
import { AdsSortSerice } from '../../services/ads-sort.service';

@Component({
  selector: 'app-ads-sort-control',
  templateUrl: './ads-sort-control.component.html',
  styleUrls: ['./ads-sort-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsSortControlComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() sortOrder: ISort;
  sortForm: FormGroup;
  sortOptions$: Observable<ISortOption[]>;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly adsSortSerive: AdsSortSerice
  ) { }

  private createSortControl(sortOptions: ISortOption[]): void {
    if (!sortOptions.length) {
      return;
    }

    let selectedOption = sortOptions[0];
    if (!!this.sortOrder) {
      selectedOption = sortOptions.filter(sortOption => sortOption?.field === this.sortOrder.key && sortOption?.value === this.sortOrder.order)[0];
    }

    this.sortForm.controls.sort.patchValue(`${selectedOption?.field}_${selectedOption?.value}`, { emitEvent: false });
  }

  ngOnInit(): void {
    this.sortForm = this.formBuilder.group({sort: ['']});
    this.sortForm.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(value => this.adsSortSerive.onSortOrderChanged(value.sort));

    this.sortOptions$ = this.adsSortSerive.getSortOptions$().pipe(
      takeUntil(this.destroy$),
      tap((sortOptions: ISortOption[]) => this.createSortControl(sortOptions))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
