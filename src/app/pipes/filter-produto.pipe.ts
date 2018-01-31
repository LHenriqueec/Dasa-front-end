import { Pipe, PipeTransform } from '@angular/core';

import { Produto } from '../entity/produto';

@Pipe({
  name: 'filterProduto'
})
export class FilterProdutoPipe implements PipeTransform {

  transform(value: Produto[], args?: string): Produto[] {
   return this.contains(value, args);
  }

  private contains(produtos: Produto[], value: string): Produto[] {
    value = value.toLowerCase();
    return produtos.filter(produto => {
      return produto.codigo.toLowerCase().indexOf(value) >= 0
        || produto.nome.toLowerCase().indexOf(value) >= 0;
    });
  }
}
