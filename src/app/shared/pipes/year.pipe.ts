import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: string): string {
    const date: string[] = value.split('-');
    return `(${date[0]})`;
  }

}