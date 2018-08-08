function validar(valor) {
    try {
        if (valor.length === 0)
            throw 'Campo vazio';
    } catch (e) {
        console.log('Exceção capturada: ' + e);
    } finally {
        console.log('Este texto sempre será exibido!');
    }
}

validar('');