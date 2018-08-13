let carro1 = new Object();
carro1.marca = 'Renault';
carro1.modelo = 'Sandero';
carro1.ano = 2015;
carro1.toString = function () {
    return this.marca + ' ' + this.modelo + ' (' + this.ano + ')';
};
console.log(carro1.marca);
console.log(carro1['modelo']);
console.log('carro1 = ' + carro1.toString());

//Nao funciona
console.log(carro1['toString()']);