import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './components/app-routing.module';

import { ComponentsModule } from './components/components.module';
import { StoresModule } from './stores/stores.module';
import { ServicesModule } from './services/services.module';
import { ActionsModule } from './actions/actions.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [
    ActionsModule,
    ComponentsModule,
    RepositoriesModule,
    ServicesModule,
    StoresModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule {}
