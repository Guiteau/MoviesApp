import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInViewComponent } from './log-in-view/log-in-view/log-in-view.component';
// import { MoviesDetailsViewComponent } from './movies-details-view/movies-details-view/movies-details-view.component';
// import { MoviesListViewComponent } from './movies-list-view/movies-list-view/movies-list-view.component';

const routes: Routes = [

  // { path: 'movies-list', component: MoviesListViewComponent },
  // { path: 'movie-detail', component: MoviesDetailsViewComponent },
  { path: 'log-in', component: LogInViewComponent },
  {
    path: 'movies-list',
    loadChildren: () => import('./movies-list-view/movies-list-view/movies-list-view.module').then(m => m.MoviesListViewModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./movies-details-view/movies-details-view/movies-details-view.module').then(m => m.MoviesDetailsViewModule)
  },
  {
    path: '',
    redirectTo: 'movies-list',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
