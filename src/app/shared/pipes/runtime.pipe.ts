import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number): string {
    const totalHours: number = value / 60;
    const hours: number = Math.floor(totalHours);
    const minutes: number = Math.round((totalHours - hours) * 60);
    return `${hours}h ${minutes}m`;
  }

}