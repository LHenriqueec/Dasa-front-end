import { Injectable } from '@angular/core';

import { Cliente } from '../entity/cliente';

@Injectable()
export class ClienteService {

  clientes: Cliente[] = [];

  constructor() { this.test_init(); }

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getClientesSemCompra(): Cliente[] {
    return this.clientes;
  }

  //TODO: Buscar dados no servidor
  private test_init() {
    let c1: Cliente = new Cliente('123', 'g18 exame mega taguatinga');
    c1.endereco.bairro = 'taguatinga';

    let c2: Cliente = new Cliente('456', 'o30 exame mega asa sul');
    c2.endereco.bairro = 'asa sul';

    this.clientes.push(c1, c2);
  }
}
