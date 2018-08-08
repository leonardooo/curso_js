function validar(email) {
    if(!email.endsWith('@serpro.gov.br')) {
        throw new Error('Email inválido! Digite novamente!');
    }
}

function login(email, senha) {
    this.validar(email);
    if(email !== 'admin@serpro.gov.br' || senha !== '123456') {
        throw new Error('Login/senha inválidos!');
    }

    document.getElementById('msg').innerHTML = 'LOGOU';
}

function autenticar(document) {
    let email = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    try {
        this.login(email, senha);
    } catch (e) {
        document.getElementById('msg').innerHTML = e.message;
    }
}