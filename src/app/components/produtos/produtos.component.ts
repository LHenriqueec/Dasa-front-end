import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Produto } from '../../entity/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];
  total: number = 0;
 
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
    this.produtos.forEach(produto => this.total += produto.quantidade);
  }

  getProdutos(): void {
    this.produtos = this.produtoService.getProdutos();
  }
}
