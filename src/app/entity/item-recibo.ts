import { Produto } from './produto';

export class ItemRecibo {
    produto: Produto;
    quantidade: number = 0;

    constructor(produto?: Produto, quantidade?: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}
