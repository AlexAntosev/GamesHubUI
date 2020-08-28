import { IAction } from '../i-action';
import { Store } from '../../stores/store';
import { GamesRepository } from 'src/app/repositories/games.repository';
import { Injectable } from '@angular/core';

@Injectable()
export class TopGamesRequestedAction implements IAction {
  constructor(private store: Store, private gamesRepository: GamesRepository) {}

  execute(): void {
    this.gamesRepository.getTopGames().subscribe((games) => {
      this.store.pagesStore.topGames.games$.next(games);
    });
  }
}
