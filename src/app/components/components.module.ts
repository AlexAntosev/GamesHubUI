import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppComponent } from 'src/app/components/app.component';
import { LayoutModule } from 'src/app/components/core/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    LayoutModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule {}
