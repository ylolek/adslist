import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavoritesComponent } from './favorites.component';
import { favoritesRoutes } from './favorites.routing';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(favoritesRoutes),
    SharedModule
  ]
})
export class FavoritesModule { }
