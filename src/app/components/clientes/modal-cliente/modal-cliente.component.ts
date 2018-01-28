import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../entity/cliente';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalClienteComponent implements OnInit {

  cliente: Cliente = new Cliente('', '');

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  addCliente(): void {
    this.clienteService.addCliente(this.cliente);
    this.cliente = new Cliente('', '');
  }
}
