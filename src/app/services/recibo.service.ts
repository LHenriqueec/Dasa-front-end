import { Injectable } from '@angular/core';

import { Recibo } from '../entity/recibo';
import { Cliente } from '../entity/cliente';

@Injectable()
export class ReciboService {

  private recibos: Recibo[] = [];

  constructor() {
    this.recibos.push(new Recibo(new Date('01/29/2018'), '2004',new Cliente('g18 exame mega taguatinga')))
  }

  getRecibos(): Recibo[] {
    return this.recibos;
  }
}
