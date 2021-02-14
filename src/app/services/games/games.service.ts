import { Injectable } from '@angular/core';
import { IGameDetails } from 'src/app/models/api/games/i-game-details';
import { ITopGamesEntry } from 'src/app/models/api/games/i-top-games-entry';
import { GameDetails } from 'src/app/models/app/top-games/game-details';
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

  mapToModelDetails(game: IGameDetails): GameDetails {
    return {
      id: game.id,
      name: game.name,
      description: game.description || ' - ',
      image: game.image,
      isFree: game.isFree,
      releaseDate: game.releaseDate,
      requiredAge: game.requiredAge,
      type: game.type,
      website: game.website || '',
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
