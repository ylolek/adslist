import { Routes } from '@angular/router';
import { BaseComponent } from './core/components/base/base.component';

import { Error404Component } from './core/components/error-pages/error404/error404.component';
import { BaseResolver } from './core/resolvers/base.resolver';

export const appRoutes: Routes = [
  {
    path: '',
    resolve: { data: BaseResolver },
    component: BaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/ads/ads.module').then(m => m.AdsModule),
      },
      {
        path: 'hirdetes/:id',
        loadChildren: () => import('./modules/ad-detail/ad-detail.module').then(m => m.AdDetailModule),
      },
      {
        path: 'kedvencek',
        loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesModule),
      },
      {
        path: '404',
        component: Error404Component
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
