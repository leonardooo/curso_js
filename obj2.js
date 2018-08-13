let carro2 = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2013,
    toString: function () {
        return this.marca + ' ' + this.modelo + ' (' + this.ano +
            ')';
    }
};
console.log('carro2 = ' + carro2.toString());