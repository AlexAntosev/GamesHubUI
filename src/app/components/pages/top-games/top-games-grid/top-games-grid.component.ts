import { Component, Input } from '@angular/core';
import { TopGamesEntry } from 'src/app/models/app/top-games/top-games-entry';

@Component({
  selector: 'top-games-grid',
  templateUrl: 'top-games-grid.component.html',
  styleUrls: ['top-games-grid.component.scss']
})
export class TopGamesGridComponent {
  @Input()
  games: TopGamesEntry[];
}
