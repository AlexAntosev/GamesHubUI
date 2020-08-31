import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { GamesRepository } from 'src/app/repositories/games.repository';
import { GamesService } from 'src/app/services/games/games.service';
import { Store } from 'src/app/stores/store';

@Injectable()
export class GameDetailsRequestedAction implements IAction {
  constructor(
    private store: Store,
    private gamesRepository: GamesRepository,
    private gamesService: GamesService
  ) {}

  execute(param: string): void {
    this.gamesRepository.getGameDetails(param).subscribe(game => {
      const gameModel = this.gamesService.mapToModelDetails(game);
      this.store.pagesStore.gameOverview.game$.next(gameModel);
    });
  }
}
