import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridPageNavigationComponent } from 'src/app/components/pages/grid-page-navigation/grid-page-navigation.component';
import { TopGamesGridComponent } from 'src/app/components/pages/top-games/top-games-grid/top-games-grid.component';
import { TopGamesRoutingModule } from 'src/app/components/pages/top-games/top-games-routing.module';
import { TopGamesComponent } from 'src/app/components/pages/top-games/top-games.component';

@NgModule({
  declarations: [
    TopGamesComponent,
    TopGamesGridComponent, 
    GridPageNavigationComponent
  ],
  imports: [CommonModule, TopGamesRoutingModule]
})
export class TopGamesModule {}
