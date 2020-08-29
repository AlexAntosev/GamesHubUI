import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {ITopGamesEntry} from '../models/api/games/i-top-games-entry';
import { Injectable } from '@angular/core';

@Injectable()
export class GamesRepository {
  constructor(private httpClient: HttpClient) {

  }

  getTopGames(): Observable<ITopGamesEntry[]> {
    return this.httpClient.get<ITopGamesEntry[]>('https://localhost:44371/api/games/top');
  }
}
