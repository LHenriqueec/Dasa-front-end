import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Produto } from '../../../entity/produto';
import { ProdutoService } from '../../../services/produto.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalProdutoComponent implements OnInit {

  produto: Produto;

  constructor(private produtoService: ProdutoService) {
    this.produto = new Produto('', '', 0);
  }

  ngOnInit() {
  }

  addProduto() {
    this.produtoService.addProduto(this.produto);
    this.produto = new Produto('', '', 0);
  }

}
