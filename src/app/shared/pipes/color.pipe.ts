import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 0 && value < 50) {
      return 'red';
    } else if (value >= 50 && value < 75) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

}