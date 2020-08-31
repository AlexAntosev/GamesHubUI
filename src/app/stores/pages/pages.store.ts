import { GameOverviewStore } from 'src/app/stores/pages/game-overview/game-overview.store';
import { TopGamesStore } from 'src/app/stores/pages/top-games/top-games.store';

export class PagesStore {
  topGames = new TopGamesStore();
  gameOverview = new GameOverviewStore();
}
