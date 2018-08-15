let pessoa = {
    nome: 'Zezinho', idade: 30, endereco: {
        logradouro: 'Rua sem Saida', numero: 100
    }, telefones: ['9999-9999', '9999-9955']
};

let jsonPessoa = JSON.stringify(pessoa);
console.log(jsonPessoa);

let pessoa1 = JSON.parse(jsonPessoa);
console.log(pessoa1);

let pessoa2 = JSON.parse('{ "nome": "Zezinho", "idade":30, "endereco": {"logradouro": "Rua sem Saida", "numero":100}, "telefones": ["9999-9999", "9999-9955"]}');
console.log(pessoa2);