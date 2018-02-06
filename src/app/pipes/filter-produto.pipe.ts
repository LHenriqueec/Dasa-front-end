import { Pipe, PipeTransform } from '@angular/core';

import { Produto } from '../entity/produto';

@Pipe({
  name: 'filterProduto'
})
export class FilterProdutoPipe implements PipeTransform {

  transform(produtos: Produto[], search?: string): Produto[] {
   return search ? this.contains(produtos, search) : produtos;
  }

  private contains(produtos: Produto[], value: string): Produto[] {
    value = value.toLowerCase();
    return produtos.filter(produto => {
      return produto.codigo.toLowerCase().indexOf(value) >= 0
        || produto.nome.toLowerCase().indexOf(value) >= 0;
    });
  }
}
