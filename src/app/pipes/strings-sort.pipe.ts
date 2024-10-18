import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringsSort'
})
export class StringsSortPipe implements PipeTransform {

  transform(value: string[], direction?: string): string[] {
    if (!Array.isArray(value)) {
      throw new Error('Input is not an array');
    }

    if (!direction) {
      return value;
    }

    return value.sort((a, b) => {
      const comparison = a.localeCompare(b);
      return direction === 'asc' ? comparison : -comparison;
    });
  }
}
