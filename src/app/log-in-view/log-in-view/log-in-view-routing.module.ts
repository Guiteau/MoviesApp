import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInViewComponent } from './log-in-view.component';

const routes: Routes = [
  {
    path: '',
    component: LogInViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInViewRoutingModule { }
