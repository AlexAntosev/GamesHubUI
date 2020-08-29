import { IAction } from 'src/app/actions/i-action';
import { Store } from 'src/app/stores/store';
import { GamesRepository } from 'src/app/repositories/games.repository';
import { Injectable } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';

@Injectable()
export class TopGamesRequestedAction implements IAction {
  constructor(
    private store: Store,
    private gamesRepository: GamesRepository,
    private gamesService: GamesService
  ) {}

  execute(): void {
    this.gamesRepository.getTopGames().subscribe((games) => {
      const gamesModel = games.map((g) => this.gamesService.mapToModel(g));
      this.store.pagesStore.topGames.games$.next(gamesModel);
    });
  }
}
