import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TopGamesModule} from './components/top-games/top-games.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TopGamesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
