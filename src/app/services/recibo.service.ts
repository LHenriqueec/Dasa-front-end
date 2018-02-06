import { Injectable } from '@angular/core';

import { Recibo } from '../entity/recibo';
import { Cliente } from '../entity/cliente';

@Injectable()
export class ReciboService {

  private recibos: Recibo[];
  private lastNumber;

  constructor() {
    //TODO: Buscar Recibos no servidor;
    this.recibos = [];
    this.loadLastNumber();
  }

  getRecibos(): Recibo[] {
    return this.recibos;
  }

  addRecibo(recibo: Recibo) {
    this.recibos.push(recibo);
    this.updateLastNumber();
  }

  getLastNumber(): string {
    return this.lastNumber;
  }

  private updateLastNumber() {
    let number: number = Number.parseInt(this.lastNumber);
    number++;
    this.lastNumber = number.toString();
  }

  /**
   * 
   */
  private loadLastNumber() {
    let number: number = 0;
    if(this.recibos.length > 0) {
      this.recibos.forEach(recibo => {
        let numRecibo: number = Number.parseInt(recibo.numero);
        number = numRecibo > number ? numRecibo : number;
      });
    } else {
      number = 1000;
    }

    this.lastNumber = number.toString();
  }
}
