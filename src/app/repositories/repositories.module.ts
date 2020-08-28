import { NgModule } from '@angular/core';
import { GamesRepository } from './games.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [GamesRepository],
})
export class RepositoriesModule {}
