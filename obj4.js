class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
}
let pessoa = new Pessoa('Zezinho');
console.log(pessoa.getNome());