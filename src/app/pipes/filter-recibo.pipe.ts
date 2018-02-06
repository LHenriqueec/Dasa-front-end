import { Pipe, PipeTransform } from '@angular/core';

import { Recibo } from '../entity/recibo';

@Pipe({
  name: 'filterRecibo'
})
export class FilterReciboPipe implements PipeTransform {

  transform(recibos: Recibo[], search?: string): any {
    return search? this.contains(recibos, search) : recibos;
  }

  private contains(recibos: Recibo[], search: string): Recibo[] {
    return recibos.filter(recibo => {
      return recibo.numero.indexOf(search) >= 0
        || recibo.cliente.nome.toLowerCase().indexOf(search) >= 0
    });
  }
}
