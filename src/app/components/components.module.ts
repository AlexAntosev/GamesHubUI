import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppComponent } from 'src/app/components/app.component';
import { TopGamesModule } from 'src/app/components/top-games/top-games.module';
import { GameOverviewComponent } from './game-overview/game-overview.component';

@NgModule({
  declarations: [AppComponent, GameOverviewComponent],
  imports: [
    TopGamesModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule {}
