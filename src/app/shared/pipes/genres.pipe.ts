import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(values: any[]): string[] {
    const genres: string[] = values?.map((value: any) => value.name);
    // let result: string = '';
    // genres?.forEach((genre: string) =>)
    return genres;
  }

}