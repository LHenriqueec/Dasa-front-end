import { Pipe, PipeTransform } from '@angular/core';

import { Recibo } from '../entity/recibo';

@Pipe({
  name: 'filterRecibo'
})
export class FilterReciboPipe implements PipeTransform {

  transform(value: Recibo[], args?: string): Recibo[] {
    return this.contains(value, args);
  }

  private contains(recibos: Recibo[], value: string): Recibo[] {
    value = value.toLowerCase();
    return recibos.filter(recibo => {
      return recibo.numero.indexOf(value) >= 0
        || recibo.cliente.nome.toLowerCase().indexOf(value) >= 0;
    });
  }
}
