import { Cliente } from './cliente';
import { Produto } from './produto';

export class Recibo {
    emissao: Date;
    numero: string;
    cliente: Cliente;
    produtos: Produto[];

    constructor(emissao?: Date, numero?: string,cliente?: Cliente, produto?: Produto[]) {
        this.emissao = new Date();
        this.numero = numero;
        this.cliente = new Cliente('g18 exame mega taguatinga', '');
        this.produtos = [];
    }

    addProduto(produto: Produto): void {
        this.produtos.push(produto);
    }
}