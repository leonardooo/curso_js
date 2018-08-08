let tipofruta = 'maçã';
switch (tipofruta) {
    case 'laranja':
        console.log('O quilo da laranja está R$0,59.');
        break;
    case 'banana':
        console.log('O quilo da banana está R$0,48.');
        break;
    default:
        console.log('Desculpe, não temos ' + tipofruta + '.');
}
console.log('Gostaria de mais alguma coisa?');