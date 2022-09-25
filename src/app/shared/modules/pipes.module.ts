/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { YearPipe } from '../pipes/year.pipe';
import { GenresPipe } from '../pipes/genres.pipe';
import { RuntimePipe } from '../pipes/runtime.pipe';

@NgModule({
  declarations: [
    YearPipe,
    GenresPipe,
    RuntimePipe
  ],
  exports: [
    YearPipe,
    GenresPipe,
    RuntimePipe
  ],
  imports: []
})
export class PipesModule { }
