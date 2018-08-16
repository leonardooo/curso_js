class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(valor) {
        this._nome = valor;
    }
}
let pessoa = new Pessoa('Zezinho');
pessoa.nome = 'Huguinho';
console.log(pessoa.nome);