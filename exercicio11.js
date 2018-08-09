function calcular() {
    console.log('OI');
    let valor = 0;
    let prod = document.getElementById("produto").value;
    switch(prod) {
        case 'beterraba':
            valor = 1;
            break;
        case 'alface':
            valor = 0.5;
            break;
        case 'acelga':
            valor = 2;
            break;
        case 'pimenta':
            valor = 1.5;
            break;
        case 'cebola':
            valor = 0.45;
            break;
        default:
            valor = 0;
    }

    let qtd = Number.parseInt(document.getElementById('quant').value);
    valor *= qtd;

    document.getElementById('total').value = valor;

    let total_desc = valor;
    let desc = document.getElementById('desconto').value;
    switch(desc) {
        case 'cash':
            total_desc -= (total_desc * 0.1);
            break;
        case 'boleto':
            total_desc -= (total_desc * 0.05);
            break;
        default:
            total_desc = total_desc;
    }

    document.getElementById('res').innerHTML = total_desc;

    let tabela = document.getElementById('tabela');
    let linha = tabela.insertRow();
    linha.insertCell().innerHTML = document.getElementById("produto").value;
    linha.insertCell().innerHTML = total_desc;
}