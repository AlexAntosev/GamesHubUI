import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppComponent } from 'src/app/components/app.component';
import { GameOverviewModule } from 'src/app/components/game-overview/game-overview.module';
import { TopGamesModule } from 'src/app/components/top-games/top-games.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TopGamesModule,
    GameOverviewModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule {}
