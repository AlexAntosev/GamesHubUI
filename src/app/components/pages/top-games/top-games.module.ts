import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonComponentsModule } from 'src/app/components/core/common/common-components.module';
import { TopGamesGridComponent } from 'src/app/components/pages/top-games/top-games-grid/top-games-grid.component';
import { TopGamesRoutingModule } from 'src/app/components/pages/top-games/top-games-routing.module';
import { TopGamesComponent } from 'src/app/components/pages/top-games/top-games.component';

@NgModule({
  declarations: [TopGamesComponent, TopGamesGridComponent],
  imports: [CommonModule, TopGamesRoutingModule, CommonComponentsModule]
})
export class TopGamesModule {}
