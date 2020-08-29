import { Component, Input, OnInit } from '@angular/core';
import { TopGamesEntry } from 'src/app/models/app/top-games/top-games-entry';

@Component({
  selector: 'top-games-grid-item',
  templateUrl: './top-games-grid-item.component.html',
  styleUrls: ['./top-games-grid-item.component.scss']
})
export class TopGamesGridItemComponent implements OnInit {
  @Input()
  game: TopGamesEntry;

  constructor() {}

  ngOnInit(): void {}
}
