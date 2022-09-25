import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MoviesDetailsViewComponent } from './movies-details-view.component';
import { MoviesDetailsViewRoutingModule } from './movies-details-view-routing.module';
import { IgxCoreModule } from 'src/app/shared/igx-core.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';

@NgModule({
    declarations: [
        MoviesDetailsViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MoviesDetailsViewRoutingModule,
        IgxCoreModule,
        PipesModule
    ],
  })
  export class MoviesDetailsViewModule { }