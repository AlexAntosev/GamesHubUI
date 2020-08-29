import { NgModule } from '@angular/core';
import { TopGamesRequestedAction } from 'src/app/actions/top-games/top-games-requested.action';

@NgModule({
  providers: [TopGamesRequestedAction]
})
export class ActionsModule {}
