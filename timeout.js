console.log('Antes da chamada do setTimeout()...');
setTimeout(function () {
    console.log('Chamada da função de callback!');
}, 3000);
console.log('Após chamada do setTimeout()...');