class HttpPromise {
    get(url) {
        return new Promise(function (resolve, reject) {
            // simulando uma requisicao HTTP assíncrona
            setTimeout(function () {
                console.log('Resposta do servidor recebida após 3s...');
                // simulando resposta OK
                const response = { status: 404 }; // HTTP 404 NOT FOUND
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            }, 3000);
        });
    }
}

let http = new HttpPromise();
console.log('Simulando uma requisição HTTP a um servidor backend...');
let promise = http.get('http://localhost:8080/api/cursos');
promise.then(function (response) {
    console.log('Tratando sucesso (status = ' + response.status + ')');
}, function (error) {
    console.log('Tratando erro (status = ' + error.status + ')');
});
console.log('Após a requisição HTTP...');