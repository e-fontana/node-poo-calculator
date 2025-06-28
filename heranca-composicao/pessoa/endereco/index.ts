import { UnidadeFederativa } from "./unidadeFederativa";

export class Endereco {
    constructor(
        private logradouro: string,
        private numero: string,
        private complemento: string,
        private cep: string,
        private cidade: string,
        private uf: UnidadeFederativa
    ) {}

    toString(): string {
        return `${this.logradouro}, ${this.numero} ${this.complemento}, ${this.cidade} - ${this.uf}, CEP: ${this.cep}`;
    }
}