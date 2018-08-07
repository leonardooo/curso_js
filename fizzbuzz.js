/*
Escreva um arquivo javascript para implementar o algoritmo FizzBuzz.
Nesse algoritmo, quando um determinado número é divisivel por 3 é retornado 'Fizz'
e quando o número é divisível por 5 é retornado 'Buzz'.
Quando esse número é divisível por 3 e por 5 ao mesmo tempo, é retornado 'FizzBuzz'.
Invoque essa função no arquivo para testar o algoritmo.
*/

function fizzbuzz(numero) {
    let resto3 = numero % 3;
    let resto5 = numero % 5;

    if(resto3 == 0 && resto5 == 0) {
        return 'FizzBuzz';
    }

    if(resto3 == 0) {
        return 'Fizz';
    }

    if(resto5 == 0) {
        return 'Buzz';
    }

    return '.';
}

let f = 0;
let b = 0;
let fb = 0;
let x = 100;
for(let i = 0; i <= x; i+=1) {
    let resp = fizzbuzz(i);
    if(resp === 'FizzBuzz') {
        fb += 1;
    } else if(resp === 'Fizz') {
        f += 1;
    } else if(resp === 'Buzz') {
        b += 1;
    }
    
    console.log(i.toString() + ' - ' + resp);
}

console.log();
console.log('Entre 0 e ' + x + ' temos:');
console.log(fb + ' FizzBuzz');
console.log(f + ' Fizz');
console.log(b + ' Buzz');