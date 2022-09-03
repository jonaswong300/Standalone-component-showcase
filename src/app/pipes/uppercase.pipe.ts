import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: true,
})
export class UppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    if(!!value && typeof(value) === 'string') return value.toUpperCase();
    return '';
  }

}
