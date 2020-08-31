import { BehaviorSubject } from 'rxjs';
import { GameDetails } from 'src/app/models/app/top-games/game-details';

export class GameOverviewStore {
  game$: BehaviorSubject<GameDetails> = new BehaviorSubject<GameDetails>(new GameDetails);
}
