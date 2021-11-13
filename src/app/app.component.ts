import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private readonly router: Router,
    private readonly headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(events => events instanceof NavigationStart)
    ).subscribe(_ => { this.headerService.closeMenu() });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
