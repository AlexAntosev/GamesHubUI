import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GameDetailsRequestedAction } from 'src/app/actions/game-overview/game-details.requested.action';
import { GameDetails } from 'src/app/models/app/top-games/game-details';
import { Store } from 'src/app/stores/store';

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.scss']
})
export class GameOverviewComponent implements OnInit {
  game$: Observable<GameDetails>;
  game: GameDetails;

  constructor(
    private route: ActivatedRoute,
    private gameDetailsRequestedAction: GameDetailsRequestedAction,
    private store: Store,
    private location: Location
  ) {
    this.game$ = store.pagesStore.gameOverview.game$;
  }

  ngOnInit(): void {
    this.game$.subscribe(game => (this.game = game));
    this.getGameDetails();
  }

  getGameDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameDetailsRequestedAction.execute(id.toString());
  }

  goBack() {
    this.location.back();
  }
}
