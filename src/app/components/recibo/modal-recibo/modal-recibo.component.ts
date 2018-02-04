import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ReciboService } from '../../../services/recibo.service';
import { ClienteService } from '../../../services/cliente.service';
import { ProdutoService } from '../../../services/produto.service';
import { Recibo } from '../../../entity/recibo';
import { Produto } from '../../../entity/produto';
import { Cliente } from '../../../entity/cliente';
import { ItemRecibo } from '../../../entity/item-recibo';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.css'],
})
export class ModalReciboComponent implements OnInit {

  recibo: Recibo;
  total: number = 0;

  constructor(private reciboService: ReciboService, private clienteService: ClienteService, private produtoService: ProdutoService) {
    this.recibo = new Recibo(this.reciboService.getLastNumber());
  }

  ngOnInit() {
  }


  addRecibo() {
    this.reciboService.addRecibo(this.recibo);
    this.recibo = new Recibo();
  }

  addItem(produto: Produto, quantidade) {
    this.recibo.addItem(produto, quantidade);
  }

  removeItem(index: number) {
    this.recibo.removeItem(index);
  }

  selectCliente(cliente) {
    this.recibo.cliente = cliente;
  }

  getProdutos(): Produto[] {
    return this.produtoService.getProdutos();
  }

  getClientes(): Cliente[] {
    return this.clienteService.getClientes();
  }
}
