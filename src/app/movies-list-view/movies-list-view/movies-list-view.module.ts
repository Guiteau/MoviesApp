import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MoviesListViewRoutingModule } from './movies-list-view-routing.module';
import { MoviesListViewComponent } from './movies-list-view.component';
import { IgxCoreModule } from 'src/app/shared/igx-core.module';

@NgModule({
  declarations: [
    MoviesListViewComponent
  ],
  imports: [
    CommonModule,
    MoviesListViewRoutingModule,
    IgxCoreModule,
    FormsModule
  ],
})
export class MoviesListViewModule { }
