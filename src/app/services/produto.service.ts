import { Injectable } from '@angular/core';

import { Produto } from '../entity/produto';

@Injectable()
export class ProdutoService {

  private produtos: Produto[] = [
    new Produto('0010', 'picole limao', 75),
    new Produto('0012', 'picole morango', 50)
  ];

  constructor() { }

  addProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }
}
