import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopGamesModule } from './top-games/top-games.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    TopGamesModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule {}
