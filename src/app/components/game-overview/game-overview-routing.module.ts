import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameOverviewComponent } from 'src/app/components/game-overview/game-overview.component';

const routes: Routes = [
    { path: ':id', component: GameOverviewComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class GameOverviewRoutingModule {}