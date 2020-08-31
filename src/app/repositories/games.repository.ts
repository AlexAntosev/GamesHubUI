import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameDetails } from 'src/app/models/api/games/i-game-details';
import { ITopGamesEntry } from 'src/app/models/api/games/i-top-games-entry';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class GamesRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getTopGames(): Observable<ITopGamesEntry[]> {
    return this.get<ITopGamesEntry[]>('games/top');
  }

  getGameDetails(id: string): Observable<IGameDetails> {
    return this.get<IGameDetails>(`games/${id}`);
  }
}
