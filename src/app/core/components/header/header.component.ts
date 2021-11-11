import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  isMenuOpen$: Observable<boolean>;
  constructor(private readonly headerSercice: HeaderService) { }

  ngOnInit(): void {
    this.isMenuOpen$ = this.headerSercice.menuOpen$.pipe(takeUntil(this.destroy$));
  }

  toggleMenu(): void {
    this.headerSercice.toggleMenu();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
