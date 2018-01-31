export class Endereco {
    cidade: string = '';
    bairro: string = '';
    logradouro: string = '';

    constructor(bairro: string) {
        this.bairro = bairro;
    }
}