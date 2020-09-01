import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GameOverviewRoutingModule } from 'src/app/components/pages/game-overview/game-overview-routing.module';
import { GameOverviewComponent } from 'src/app/components/pages/game-overview/game-overview.component';

@NgModule({
    declarations: [
      GameOverviewComponent
    ],
    imports: [CommonModule, GameOverviewRoutingModule]
  })
  export class GameOverviewModule {}
