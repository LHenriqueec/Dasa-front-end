export class Produto {
    codigo: string;
    nome: string;
    quantidade: number;

    constructor(codigo: string, nome: string, quantidade: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade =  quantidade;
    }
}