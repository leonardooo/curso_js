class Endereco {
    constructor(logradouro, numero) {
        this.logradouro = logradouro;
        this.numero = numero;
    }

    toString() {
        return this.logradouro + ', ' + this.numero + '.';
    }
}

class Pessoa {
    constructor(nome, idade, endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
    }

    toString() {
        return this.nome + ' tem ' + this.idade + ' anos e mora em '
            + this.endereco.toString();
    }
}

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let logradouro = document.getElementById('logradouro').value;
    let numero = document.getElementById('numero').value;

    if(nome.trim() === '' || idade.trim() === ''
        || logradouro.trim() === '' || numero.trim() === '') {
            document.getElementById('res').innerHTML = 'Faltou coisa!!!';
            return;
    }

    let pessoa = new Pessoa(nome,idade, new Endereco(logradouro, numero));

    document.getElementById('res').innerHTML = pessoa.toString();
}