import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopGamesComponent } from './top-games/top-games.component';

const routes: Routes = [
  {path:'top-games', component: TopGamesComponent},
  { path: '',   redirectTo: '/top-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }