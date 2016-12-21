import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent }   from './app.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';
import { HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './heroes/hero.service';
import {HeroesDashboardComponent} from './heroes/heroes-dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroesDashboardComponent
    ],
    providers: [
      HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

