import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOverviewComponent } from 'src/app/components/game-overview/game-overview.component';

const routes: Routes = [
  {
    path: 'top-games',
    loadChildren: () =>
      import('src/app/components/top-games/top-games.module').then(
        m => m.TopGamesModule
      )
  },
  { path: '', redirectTo: '/top-games', pathMatch: 'full' },
  { path: 'game-overview/:id', component: GameOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
