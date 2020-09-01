import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TopGamesGridComponent } from 'src/app/components/pages/top-games/top-games-grid/top-games-grid.component';
import { TopGamesRoutingModule } from 'src/app/components/pages/top-games/top-games-routing.module';
import { TopGamesComponent } from 'src/app/components/pages/top-games/top-games.component';

@NgModule({
  declarations: [
    TopGamesComponent,
    TopGamesGridComponent
  ],
  imports: [CommonModule, TopGamesRoutingModule]
})
export class TopGamesModule {}
