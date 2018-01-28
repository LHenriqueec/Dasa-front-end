import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Cliente } from '../../entity/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-clientes-sem-compra',
  templateUrl: './clientes-sem-compra.component.html',
  styleUrls: ['./clientes-sem-compra.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientesSemCompraComponent implements OnInit {

  clientesSemCompra: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
   this.clientesSemCompra = this.clienteService.getClientesSemCompra();
  }
}
