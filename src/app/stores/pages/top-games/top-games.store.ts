import { BehaviorSubject } from 'rxjs';
import { TopGamesEntry } from 'src/app/models/app/top-games/top-games-entry';

export class TopGamesStore {
  games$: BehaviorSubject<TopGamesEntry[]> = new BehaviorSubject<
    TopGamesEntry[]
  >([]);
}
