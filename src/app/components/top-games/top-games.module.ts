import { NgModule } from '@angular/core';
import { TopGamesGridComponent } from './top-games-grid/top-games-grid.component';
import { TopGamesComponent } from './top-games.component';
import { TopGamesGridItemComponent } from './top-games-grid/top-games-grid-item/top-games-grid-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TopGamesComponent,
    TopGamesGridComponent,
    TopGamesGridItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TopGamesModule { }
