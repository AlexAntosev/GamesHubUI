import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';

import { ComponentsModule } from './components/components.module';
import { StoresModule } from './stores/stores.module';
import { ActionsModule } from './actions/actions.module';
import { RepositoriesModule } from './repositories/repositories.module';

@NgModule({
  imports: [
    ActionsModule,
    ComponentsModule,
    RepositoriesModule,
    StoresModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule {}
