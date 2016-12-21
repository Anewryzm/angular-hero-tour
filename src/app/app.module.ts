import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';
import { HeroesComponent} from './heroes/heroes.component'
import {HeroService} from './heroes/hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'heroes',
      component: HeroesComponent
    }])
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
    ],
    providers: [
      HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

