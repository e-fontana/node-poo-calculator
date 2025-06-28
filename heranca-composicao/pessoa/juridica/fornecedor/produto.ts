export class Produto {
    constructor(
        private nome: string,
        private categoria: string,
        private preco: number,
    ) {}

    toString(): string {
        return `Produto: ${this.nome}, Categoria: ${this.categoria}, Preço: ${this.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    }
}