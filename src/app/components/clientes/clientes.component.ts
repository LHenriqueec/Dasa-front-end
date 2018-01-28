import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../entity/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
    this.clientes = this.clienteService.getClientes();
  }
}
