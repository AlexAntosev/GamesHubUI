import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';

import { ComponentsModule } from './components/components.module';
import { StoresModule } from './stores/stores.module';

@NgModule({
  imports: [ComponentsModule, StoresModule, BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule {}
