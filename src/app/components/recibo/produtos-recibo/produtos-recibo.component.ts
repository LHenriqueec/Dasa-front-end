import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Produto } from '../../../entity/produto';
import { ProdutoService } from '../../../services/produto.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-produtos-recibo',
  templateUrl: './produtos-recibo.component.html',
  styleUrls: ['./produtos-recibo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutosReciboComponent implements OnInit, DoCheck {

  produtos: Produto[];
  total: number;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  ngDoCheck() {
    this.total = 0;
    this.produtos.forEach(produto => this.total += produto.quantidade);
  }
  
  getProdutos(): void {
    this.produtos = this.produtoService.getProdutos();
  }
}
