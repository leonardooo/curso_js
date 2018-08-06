var a = 10;
let b = 20;
if (true) {
    var c = 30;
    let d = 40;
    const e = 50;
}
console.log(a);
console.log(b);
console.log(c);
//console.log(d); // como foi declarada com let, o escopo dela eh local no bloco do if
//console.log(e); // como foi declarada com const, o escopo dela eh local no bloco do if