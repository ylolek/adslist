import { Routes } from '@angular/router';

import { Error404Component } from './core/components/error-pages/error404/error404.component';

export const appRutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/ads/ads.module').then(m => m.AdsModule),
  },
  {
    path: 'hirdetes/:id',
    pathMatch: 'full',
    loadChildren: () => import('./modules/ad-detail/ad-detail.module').then(m => m.AdDetailModule),
  },
  {
    path: 'kedvencek',
    pathMatch: 'full',
    loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesModule),
  },
  {
    path: '404',
    pathMatch: 'full',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
