import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopGamesModule } from './top-games/top-games.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    TopGamesModule, 
    CommonModule, 
    BrowserModule, 
    AppRoutingModule,
    FormsModule]
})
export class ComponentsModule {}
