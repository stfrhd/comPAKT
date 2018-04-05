import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  imports: [
    CommonModule, FavoritesRoutingModule
  ],
  declarations: [FavoritesComponent]
})
export class FavoritesModule { }
