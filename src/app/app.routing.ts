import { Routes } from '@angular/router';

import { Error404Component } from './core/error-pages/error404/error404.component';

export const appRutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/ads/ads.module').then(m => m.AdsModule),
  },
  {
    path: 'hirdetes/:id',
    pathMatch: 'full',
    loadChildren: () => import('./modules/ad/ad.module').then(m => m.AdModule),
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
    redirectTo: '/404'
  }
];
