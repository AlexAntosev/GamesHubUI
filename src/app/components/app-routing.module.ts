import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'top-games',
    loadChildren: () =>
      import('src/app/components/top-games/top-games.module').then(
        m => m.TopGamesModule
      )
  },
  {
    path: 'game-overview',
    loadChildren: () =>
      import('src/app/components/game-overview/game-overview.module').then(
        m => m.GameOverviewModule
      )
  },
  { path: '', redirectTo: '/top-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
