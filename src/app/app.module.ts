import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { HeroDetailComponent }   from './heroes/hero-detail.component';
import { HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './heroes/hero.service';
import {HeroesDashboardComponent} from './heroes/heroes-dashboard.component';
import {HeroSearchComponent} from './heroes/hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroesDashboardComponent,
    HeroSearchComponent
    ],
    providers: [
      HeroService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}

