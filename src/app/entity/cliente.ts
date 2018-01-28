import { Endereco } from './endereco';
import { Contato } from './contato';

export class Cliente {
    cnpj: string;
    nome: string;
    endereco: Endereco;
    contato: Contato;

    constructor(nome: string, bairro: string) {
        this.nome = nome;
        this.endereco = new Endereco(bairro);
        this.contato = new Contato();
    }
}