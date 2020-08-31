import { NgModule } from '@angular/core';
import { GameDetailsRequestedAction } from 'src/app/actions/game-overview/game-details.requested.action';
import { TopGamesRequestedAction } from 'src/app/actions/top-games/top-games-requested.action';

@NgModule({
  providers: [TopGamesRequestedAction, GameDetailsRequestedAction]
})
export class ActionsModule {}
