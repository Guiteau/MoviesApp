import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule, IgxInputGroupModule, IgxButtonGroupModule, IgxRippleModule } from "igniteui-angular";

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
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
