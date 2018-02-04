import { Endereco } from './endereco';
import { Contato } from './contato';

export class Cliente {
    cnpj: string = '';
    nome: string = '';
    endereco: Endereco;
    contato: Contato;

    constructor(cnpj?: string, nome?: string) {
        this.cnpj = cnpj;
        this.nome = nome;
        this.endereco = new Endereco();
        this.contato = new Contato();
    }
}