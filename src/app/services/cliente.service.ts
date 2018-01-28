import { Injectable } from '@angular/core';

import { Cliente } from '../entity/cliente';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [
    new Cliente('g18 exame mega taguatinga', 'taguatinga'),
    new Cliente('o30 exame mega asa sul', 'asa sul')
  ]

  constructor() { }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getClientesSemCompra(): Cliente[] {
    return [
      new Cliente('g18 exame mega taguatinga', 'taguatinga'),
      new Cliente('o30 exame mega asa sul', 'asa sul')
    ];
  }
}
