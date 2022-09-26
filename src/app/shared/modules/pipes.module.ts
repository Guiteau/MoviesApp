/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { YearPipe } from '../pipes/year.pipe';
import { GenresPipe } from '../pipes/genres.pipe';
import { RuntimePipe } from '../pipes/runtime.pipe';
import { AveragePipe } from '../pipes/average.pipe';
import { ColorPipe } from '../pipes/color.pipe';
@NgModule({
  declarations: [
    YearPipe,
    GenresPipe,
    RuntimePipe,
    AveragePipe,
    ColorPipe
  ],
  exports: [
    YearPipe,
    GenresPipe,
    RuntimePipe,
    AveragePipe,
    ColorPipe
  ],
  imports: []
})
export class PipesModule { }
