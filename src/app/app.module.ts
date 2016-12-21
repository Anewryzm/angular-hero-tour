import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';

import {HeroService} from './heroes/hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent
    ],
    providers: [
      HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
