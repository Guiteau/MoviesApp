import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'log-in', 
    loadChildren: () => import('./log-in-view/log-in-view.module').then(m => m.LoginViewViewModule)
  },
  {
    path: 'movies-list',
    loadChildren: () => import('./movies-list-view/movies-list-view.module').then(m => m.MoviesListViewModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./movies-details-view/movies-details-view.module').then(m => m.MoviesDetailsViewModule)
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
