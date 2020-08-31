import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopGamesRequestedAction } from 'src/app/actions/top-games/top-games-requested.action';
import { TopGamesEntry } from 'src/app/models/app/top-games/top-games-entry';
import { Store } from 'src/app/stores/store';

@Component({
  selector: 'top-games',
  templateUrl: 'top-games.component.html',
  styleUrls: ['top-games.component.scss']
})
export class TopGamesComponent implements OnInit {
  games$: Observable<TopGamesEntry[]>;
  games: TopGamesEntry[];

  constructor(
    store: Store,
    private gamesRequestedAction: TopGamesRequestedAction
  ) {
    this.games$ = store.pagesStore.topGames.games$;
  }

  ngOnInit() {
    this.games$.subscribe(games => (this.games = games));
  }

  queryTopGames() {
    this.gamesRequestedAction.execute();
  }
}
