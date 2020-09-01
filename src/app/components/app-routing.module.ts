import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/components/core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/top-games',
        pathMatch: 'full'
      },
      {
        path: 'top-games',
        loadChildren: () =>
          import('src/app/components/pages/top-games/top-games.module').then(
            m => m.TopGamesModule
          )
      },
      {
        path: 'game-overview',
        loadChildren: () =>
          import(
            'src/app/components/pages/game-overview/game-overview.module'
          ).then(m => m.GameOverviewModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
