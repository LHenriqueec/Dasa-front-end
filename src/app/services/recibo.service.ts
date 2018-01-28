import { Injectable } from '@angular/core';

@Injectable()
export class ReciboService {

  constructor() { }

  getRecibos() {
    return [
      {
        numero: '2007',
        cliente: 'G18 EXAME MEGA TAGUATINGA',
        emissao: '20/01/2018'
      },
      {
        numero: '2008',
        cliente: 'O30 EXAME MEGA ASA SUL',
        emissao: '21/01/2018'
      }
    ];
  }
}
