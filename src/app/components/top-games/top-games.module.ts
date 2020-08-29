import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopGamesGridItemComponent } from 'src/app/components/top-games/top-games-grid/top-games-grid-item/top-games-grid-item.component';
import { TopGamesGridComponent } from 'src/app/components/top-games/top-games-grid/top-games-grid.component';
import { TopGamesComponent } from 'src/app/components/top-games/top-games.component';

@NgModule({
  declarations: [
    TopGamesComponent,
    TopGamesGridComponent,
    TopGamesGridItemComponent
  ],
  imports: [CommonModule]
})
export class TopGamesModule {}
