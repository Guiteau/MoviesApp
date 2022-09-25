import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(values: any[]): string {
    const genres: string[] = values?.map((value: any) => value.name); 
    return genres[0];
  }

}