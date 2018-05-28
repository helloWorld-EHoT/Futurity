import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WrapperComponent } from './shared/wrapper/wrapper.component';
import { TurnService } from "./minotaur/@shared/services/turn.service";


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TurnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
