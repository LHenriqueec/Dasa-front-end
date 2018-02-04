export class Produto {
    codigo: string = '';
    nome: string = '';
    quantidade: number = 0;

    constructor(codigo?: string, nome?: string, quantidade?: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade =  quantidade;
    }
}