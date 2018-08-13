function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.toString = () => this.marca + ' ' + this.modelo + ' (' +
        this.ano + ')';
}
let carro3 = new Carro('Honda', 'Fit', 2016);
console.log('carro3 = ' + carro3.toString());