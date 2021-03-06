import { Pipe, PipeTransform } from '@angular/core';
import { currencyFormat } from '@bghoard/shared/util-formatters';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(amount: number, ...args: unknown[]): string {
    return currencyFormat(amount);
  }

}
