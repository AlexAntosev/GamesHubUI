import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopGamesComponent } from 'src/app/components/top-games/top-games.component';

const routes: Routes = [
  { path: 'top-games', component: TopGamesComponent },
  { path: '', redirectTo: '/top-games', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
