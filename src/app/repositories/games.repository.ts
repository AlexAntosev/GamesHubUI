import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITopGamesEntry } from '../models/api/games/i-top-games-entry';
import { Injectable } from '@angular/core';
import { BaseRepository } from './base.repository';

@Injectable()
export class GamesRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getTopGames(): Observable<ITopGamesEntry[]> {
    return this.get<ITopGamesEntry[]>('games/top');
  }
}
