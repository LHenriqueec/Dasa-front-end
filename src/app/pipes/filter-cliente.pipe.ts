import { Pipe, PipeTransform } from '@angular/core';

import { Cliente } from '../entity/cliente';

@Pipe({
  name: 'filterCliente'
})
export class FilterClientePipe implements PipeTransform {

  transform(clientes: Cliente[], search?: string): Cliente[] {
    return this.contains(clientes, search);
  }
  
  private contains(clientes: Cliente[], value: string): Cliente[] {
    value = value.toLowerCase();
    return clientes.filter(cliente => {
      return cliente.cnpj.indexOf(value) >= 0
        || cliente.nome.toLowerCase().indexOf(value) >= 0
        || cliente.endereco.cidade.toLowerCase().indexOf(value) >= 0
        || cliente.endereco.bairro.toLowerCase().indexOf(value) >= 0
        || cliente.endereco.logradouro.toLowerCase().indexOf(value) >= 0
        || cliente.contato.celular.indexOf(value) >= 0
        || cliente.contato.telefone.indexOf(value) >= 0
        || cliente.contato.email.toLowerCase().indexOf(value) >= 0
        || cliente.contato.responsavel.toLowerCase().indexOf(value) >= 0;
    });
  }
}
