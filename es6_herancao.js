class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }
}

class Funcionario extends Pessoa {
    constructor(nome, departamento) {
        super(nome);
        this.departamento = departamento;
    }
    getDepartamento() {
        return this.departamento;
    }
}
let func = new Funcionario('Capt. Nascimento', 'SUPDE');
console.log(func.nome + ' - ' + func.getDepartamento());