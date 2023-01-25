import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AccountantModule } from './accountant/accountant.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AccountantModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
