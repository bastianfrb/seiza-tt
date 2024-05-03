import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currency: string): string {
    if (currency === 'USD') {
      return 'US$ ' + value.toLocaleString('en-US', { minimumFractionDigits: 2 }); // Format USD currency
    } else if (currency === 'CLP') {
      return '$ ' + value.toLocaleString('es-CL'); // Format CLP currency
    } else {
      return value.toString(); // Return as it is if currency type is not recognized
    }
  }
}
