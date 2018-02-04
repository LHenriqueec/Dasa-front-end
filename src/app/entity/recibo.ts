import { Cliente } from './cliente';
import { ItemRecibo } from './item-recibo';

export class Recibo {
    emissao: Date;
    numero: string = '';
    cliente: Cliente;
    itens: ItemRecibo[];
    total: number;

    constructor(numero?: string) {
        this.numero = numero;
        this.emissao = new Date();
        this.cliente = new Cliente();
        this.itens = [];
        this.total = 0;
    }

    addItem(item: ItemRecibo): void {
        if(!this.itens) this.itens = [];

        if(this.checkExist(item)) return;

        this.itens.push(item);
        this.total += item.quantidade;
    }

    /**
     * Verifica se o item já está inserido. Caso verdadeiro, é adicionado o saldo no item existente
     * @param item ItemRecibo que será procurado na lista
     */
    private checkExist(item: ItemRecibo): boolean {
        let itemFound: ItemRecibo = this.itens.find((itemRecibo) => {
            return itemRecibo.produto == item.produto;
        })
        
        if(!itemFound) return false;
        itemFound.quantidade += item.quantidade;
        return true;
    }
}