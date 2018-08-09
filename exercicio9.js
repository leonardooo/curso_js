function processar(input) {
    let array = input.value.split(',');
    let soma = 0;
    for(let i of array) {
        let num = Number.parseInt(i);
        if( num < 1 || num > 100) {
            document.getElementById('msg').innerHTML = 'Valor menor que 1 ou maior que 100 na lista.';
            return;
        }
        soma += num;
    }
    let res = array.join(':');
    document.getElementById('msg').innerHTML = res;
    document.getElementById('saida').value = soma;
}

function limpar() {
    document.getElementById('msg').innerHTML = '';
    document.getElementById('entrada').value = '';
    document.getElementById('saida').value = '';
}