import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GamesRepository } from './games.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [GamesRepository]
})
export class RepositoriesModule {}
