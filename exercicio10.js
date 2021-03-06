var idades = [];
var sexos = [];
var experiencias = [];

var qtd = 0;
var media_homens_exp = 0;
var percentual_homens_45 = 0;
var qtd_mulheres_35_exp = 0;
var menor_idade_mulher_exp = 9999;

function onClick() {
    cadastrar(document.getElementById('idade').value,
              document.getElementById('sexo').value,
              document.getElementById('exp').value);

    qtd = 0;
    media_homens_exp = 0;
    percentual_homens_45 = 0;
    qtd_mulheres_35_exp = 0;
    menor_idade_mulher_exp = 9999;          
    
    calcular();

    let res = 'Quantidade: ' + qtd
        + '<br/>Média dos homens com experiência: ' + media_homens_exp
        + '<br/>Percentual de homens > 45 anos: ' + percentual_homens_45
        + '<br/>Quantidade de mulheres < 35 anos com experiência: ' + qtd_mulheres_35_exp
        + '<br/>Menor idade de mulheres com experiência: '
        + (menor_idade_mulher_exp < 9999 ? menor_idade_mulher_exp : ' - ');

    document.getElementById('res').innerHTML = res;
}

function cadastrar(idade, sexo, experiencia) {
    idades.push(Number.parseInt(idade));
    sexos.push(sexo);
    if(experiencia === 'true') {
        experiencias.push(true);
    } else {
        experiencias.push(false);
    }
    
}

function calcular() {
    qtd = idades.length;
    media_homens_exp = fmedia_homens_exp();
    percentual_homens_45 = fpercentual_homens_45();
    qtd_mulheres_35_exp = fqtd_mulheres_35_exp();
    menor_idade_mulher_exp = fmenor_idade_mulher_exp();
}

function fmedia_homens_exp() {
    let soma_idade = 0;
    let qtd_idade = 0;
    for(let i = 0; i < idades.length; i++) {
        if(sexos[i] === 'M' && experiencias[i]) {
            soma_idade += idades[i];
            qtd_idade++;
        }
    }
    
    if(qtd_idade === 0) {
        return 0;
    }
    
    return soma_idade / qtd_idade;
}

function fpercentual_homens_45() {
    let qtd_homens_45 = 0;
    for(let i = 0; i < idades.length; i++) {
        if(idades[i] > 45 && sexos[i] === 'M') {
            qtd_homens_45++;
        }
    }
    return qtd_homens_45 / idades.length;
}

function fqtd_mulheres_35_exp() {
    let qtd_mulheres = 0;
    for(let i = 0; i < idades.length; i++) {
        if(idades[i] < 35 && sexos[i] === 'F' && experiencias[i]) {
            qtd_mulheres++;
        }
    }
    return qtd_mulheres;
}

function fmenor_idade_mulher_exp() {
    let menor = 9999;
    for(let i = 0; i < idades.length; i++) {
        if(sexos[i] === 'F' && experiencias[i] && menor > idades[i]) {
            menor = idades[i];
        }
    }
    return menor;
}