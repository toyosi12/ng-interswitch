import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgInterswitchModule } from 'ng-interswitch'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgInterswitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
