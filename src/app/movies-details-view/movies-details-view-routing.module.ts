import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDetailsViewComponent } from './movies-details-view.component';

const routes: Routes = [
  {
    path: ':id',
    component: MoviesDetailsViewComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesDetailsViewRoutingModule { }
