import { Routes } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { FavoritesResolver } from './resolvers/favorites.resolver';

export const favoritesRoutes: Routes = [
  {
    path: '',
    resolve: { sortOrder: FavoritesResolver },
    component: FavoritesComponent
  }
];
