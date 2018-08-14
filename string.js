let str = new String('hello');
str = str.concat(' world!');
console.log(str);
str = str.replace('world', 'javascript');
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0, 2));

let re = new RegExp('natal','i');
let str1 = 'Hoje é dia de Natal!';
console.log(str1.replace(re, 'São João'));
// Hoje é dia de São João
let str2 = 'Laranjas são redondas, e laranjas são deliciosas.';
console.log(str2.replace(/laranjas/gi, 'ameixas'));
// ameixas são redondas, e ameixas são deliciosas.

let str3 = 'Klaus Cavalcante';
console.log(str3.replace(/^(\w+)\s(\w+)$/, '$2, $1'));
// Cavalcante, Klaus