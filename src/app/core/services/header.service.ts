import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderService {
  menuOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  toggleMenu(): void {
    this.menuOpen$.next(!this.menuOpen$.getValue());
  }

  closeMenu(): void {
    this.menuOpen$.next(false);
  }

  openMenu(): void {
    this.menuOpen$.next(true);
  }
}
