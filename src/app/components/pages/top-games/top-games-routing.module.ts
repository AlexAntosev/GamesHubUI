import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from 'src/app/components/pages/top-games/top-games.component';

const routes: Routes = [
  { path: '', component: TopGamesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopGamesRoutingModule {}
