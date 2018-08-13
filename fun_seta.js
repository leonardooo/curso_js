let a = ['Hidrogênio', 'Hélio', 'Lítio', 'Berílio'];
console.log(a.map(function (s) { return s.length }));
console.log(a.map(s => s.length));
let notas = [8, 4, 10, 5, 7];
let aprov1 = notas.filter(function (nota) {
    return nota >= 7;
});
console.log(aprov1);
let aprov2 = notas.filter(nota => nota >= 7);
console.log(aprov2);

a = [10,5,6,8];
const soma = a.reduce((b, curr) => b + curr);
console.log(soma);