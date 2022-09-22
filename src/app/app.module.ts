import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListViewComponent } from './movies-list-view/movies-list-view/movies-list-view.component';
import { MoviesDetailsViewComponent } from './movies-details-view/movies-details-view/movies-details-view.component';
import { LogInViewComponent } from './log-in-view/log-in-view/log-in-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListViewComponent,
    MoviesDetailsViewComponent,
    LogInViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
