import { Injectable } from '@angular/core';
import { ITopGamesEntry } from 'src/app/models/api/games/i-top-games-entry';
import { TopGamesEntry } from 'src/app/models/app/top-games/top-games-entry';

@Injectable()
export class GamesService {
  mapToModel(game: ITopGamesEntry): TopGamesEntry {
    return {
      id: game.id,
      name: game.name,
      overallRank: game.overallRank,
      rating: game.rating
    };
  }

  mapToEntity(game: TopGamesEntry): ITopGamesEntry {
    return {
      id: game.id,
      name: game.name,
      overallRank: game.overallRank,
      rating: game.rating
    };
  }
}
