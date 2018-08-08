function taxa(dias) {
    if(dias < 15) {
        return 2.5;
    }

    if(dias === 15) {
        return 2;
    }

    if(dias > 15) {
        return 1.5;
    }
}

function total(dias) {
    return dias * 50 + (dias * this.taxa(dias));
}

function calcular(document) {
    let dias = document.getElementById('campo').value;
    let taxa = this.taxa(dias) * dias;
    let valor = this.total(dias);

    document.getElementById('res').innerHTML = 'Dias: ' + dias
     + '<br/>Taxa: R$' + taxa + '<br/>Valor: R$' + valor;
}