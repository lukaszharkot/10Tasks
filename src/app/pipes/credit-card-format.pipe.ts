import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormat'
})
export class CreditCardFormatPipe implements PipeTransform {

  transform(value: string): string {
    const formattedNumber = value.match(/.{1,4}/g)?.join('-');

    return formattedNumber || value;
  }
}