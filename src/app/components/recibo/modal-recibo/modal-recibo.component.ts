import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ReciboService } from '../../../services/recibo.service';
import { ClienteService } from '../../../services/cliente.service';
import { ProdutoService } from '../../../services/produto.service';
import { Recibo } from '../../../entity/recibo';
import { Produto } from '../../../entity/produto';
import { Cliente } from '../../../entity/cliente';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.css'],
})
export class ModalReciboComponent implements OnInit {

  recibo: Recibo;
  produto: Produto;

  constructor(private reciboService: ReciboService, private clienteService: ClienteService, private produtoService: ProdutoService) {
    this.recibo = new Recibo();
    this.produto = new Produto('', '', 0);
  }

  ngOnInit() {
  }

  addProduto() {
    this.recibo.addProduto(this.produto);
  }

  addRecibo() {
    
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