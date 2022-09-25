/* Angular */
import { NgModule } from '@angular/core';

/* Pipes */
import { YearPipe } from '../pipes/year.pipe';
import { GenresPipe } from '../pipes/genres.pipe';

@NgModule({
  declarations: [
    YearPipe,
    GenresPipe
  ],
  exports: [
    YearPipe,
    GenresPipe
  ],
  imports: []
})
export class PipesModule { }
