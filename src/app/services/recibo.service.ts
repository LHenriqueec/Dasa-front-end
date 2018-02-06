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

  /**
   * @returns Retorna a lista de Recibos
   */
  getRecibos(): Recibo[] {
    return this.recibos;
  }

  /**
   * Adiciona o Recibo na lista e atualiza a sequência númerica para o próximo Recibo
   * @param recibo Recibo que será adicionado na lista
   */
  addRecibo(recibo: Recibo) {
    this.recibos.push(recibo);
    this.updateLastNumber();
  }

  /**
   * Remove o Recibo e recalcula o saldo dos produtos
   * @param index Indice do Recibo que será Removido
   */
  removeRecibo(index: number) {
    let recibo = this.recibos.splice(index, 1)[0];
    recibo.itens.forEach(item => item.produto.quantidade += item.quantidade);
  }

  /**
   * @returns Retorna o valor atual de lastNumber
   */
  getLastNumber(): string {
    return this.lastNumber;
  }

  /**
   * Atualiza a sequência númerica dos Recibos
   */
  private updateLastNumber() {
    let number: number = Number.parseInt(this.lastNumber);
    number++;
    this.lastNumber = number.toString();
  }

  /**
   * Carrega o último número de Recibo Gerado, caso contrário, inicia com '1000'
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
