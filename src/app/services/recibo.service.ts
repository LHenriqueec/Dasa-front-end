import { Injectable } from '@angular/core';

import { Recibo } from '../entity/recibo';
import { Cliente } from '../entity/cliente';

@Injectable()
export class ReciboService {

  private recibos: Recibo[] = [];
  private lastNumber = '1000';

  constructor() {
  }

  getRecibos(): Recibo[] {
    return this.recibos;
  }

  addRecibo(recibo: Recibo) {
    this.recibos.push(recibo);
    this.lastNumber += Number.parseInt(this.lastNumber);
  }

  getLastNumber(): string {
    return this.lastNumber;
  }
}
