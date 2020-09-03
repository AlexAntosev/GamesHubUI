import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  gamesCount$: Observable<number>;
  games: TopGamesEntry[];

  constructor(
    private route: ActivatedRoute,
    store: Store,
    private gamesRequestedAction: TopGamesRequestedAction
  ) {
    this.games$ = store.pagesStore.topGames.games$;
    this.gamesCount$ = store.pagesStore.topGames.gamesCount$;
  }

  ngOnInit() {
    this.games$.subscribe(games => (this.games = games));
   // this.gamesCount$.subscribe(gamesCount => (this.setPageNumbers(gamesCount)));

    const pageNumber = this.route.snapshot.paramMap.get('pageNumber');
    this.queryTopGames();
  }

  queryTopGames() {
    this.gamesRequestedAction.execute();
  }
}
