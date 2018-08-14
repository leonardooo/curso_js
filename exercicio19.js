function validarCep() {
    let cep = document.getElementById('cep').value;
    cep = cep.replace(/^([0-9]{2})([0-9]{3})([0-9]{3})$/, '$1.$2-$3');
    document.getElementById('cep').value = cep;

    if(cep.match(new RegExp(/^[0-9]{2}.[0-9]{3}-[0-9]{3}$/))) {
        document.getElementById('divcep').innerHTML = 'CEP ok!';
    } else {
        document.getElementById('divcep').innerHTML = 'CEP ERRADO!';
    }
}

function validarCpf() {
    let cpf = document.getElementById('cpf').value;

    cpf = cpf.replace(/^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/, '$1.$2.$3-$4');
    document.getElementById('cpf').value = cpf;
    
    if(cpf.match(new RegExp(/^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/))) {
        document.getElementById('divcpf').innerHTML = 'CPF ok!';
    } else {
        document.getElementById('divcpf').innerHTML = 'CPF ERRADO!';
    }
}