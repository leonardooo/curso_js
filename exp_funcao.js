function map(fun, array) {
    let result = [];
    for (i = 0; i != array.length; i++)
        result[i] = fun(array[i]);
    return result;
}
let valores = map(function (x) { return x * x * x; }, [0, 1, 2, 5, 10]);
console.log(valores);