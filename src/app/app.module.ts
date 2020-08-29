import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsModule } from './actions/actions.module';
import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { ComponentsModule } from './components/components.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { ServicesModule } from './services/services.module';
import { StoresModule } from './stores/stores.module';

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
  bootstrap: [AppComponent]
})
export class AppModule {}
