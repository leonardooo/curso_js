function getMes(indice) {
    indice--; // Ajusta o mês (1 = Jan, 12 = Dec)
    let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set' ,'Out', 'Nov', 'Dez'];
    if (meses[indice]) {
        return meses[indice];
    } else {
        throw 'MesInvalido';
    }
}

try {
    console.log(getMes(15));
} catch (e) {
    console.log(e + ' ' + typeof e);
}