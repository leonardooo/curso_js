function sortear() {
    let numeros = [];

    while(numeros.length < 6) {
        num = (Math.random()*60+1).toFixed(0);
        if(!contem(num, numeros)) {
            numeros.push(num);
        }
    }

    numeros = numeros.sort( (a,b) => a-b );

    return numeros;
}

function contem(num, numeros) {
    for(let n of numeros) {
        if(num === n) {
            return true;
        }
    }
    return false;
}

function clickSorteio() {

    let selecionados = [];
    let checkboxes = document.getElementsByName('cb');
    for(let c of checkboxes) {
        if(c.checked) {
            selecionados.push(c.value);
        }
    }

    if(selecionados.length !== 6) {
        document.getElementById('res').innerHTML = 'São 6 números!!!';
        return;
    }

    let sorteados = sortear();
    document.getElementById('res').innerHTML = 'Você marcou: ' + selecionados
        + '<br/>Sorteados: ' + sorteados
        + '<br/>' + mensagem(sorteados,selecionados);
}

function mensagem(sorteados, selecionados) {
    console.log(sorteados);
    console.log(selecionados);
    if(sorteados === selecionados) {
        return 'ACERTOU, MIZERAVI!';
    }
    return 'TENTE OUTRA VEZ, POIS BRASILEIRO NAO DESISTE NUNCA!'
}

function construirTabela() {
    let tabela = document.getElementById("tabela");

    for(let i = 0; i < 6; i++) {
        let row = tabela.insertRow();
        for(let j = 0; j < 10; j++) {
            let cell = row.insertCell();
            cell.innerHTML = transforma(i,j) + '<input type="checkbox" name="cb" value="' + (i*10+j+1) + '">';
        }
    }
}

function transforma(i,j) {
    let res = (i*10+j+1);
    if(res < 10) {
        res = '0'+res;
    } else {
        res = ''+res;
    }
    return res;
}