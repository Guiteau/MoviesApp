import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListViewComponent } from './movies-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesListViewRoutingModule { }
