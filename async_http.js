class HttpFake {
    get(url, callback) {
        // simulando uma requisicao HTTP assíncrona
        setTimeout(function () {
            console.log('Resposta do servidor recebida após 3s...');
            // simulando resposta OK
            const response = { status: 200 }; // HTTP 200 OK
            callback(response);
        }, 3000);
    }
}

let http = new HttpFake();
console.log('Simulando uma requisição HTTP a um servidor backend...');
http.get('http://localhost:8080/api/cursos', function (response) {
    if (response.status === 200) {
        console.log('Tratando sucesso (status = ' + response.status + ')');
    } else {
        console.log('Tratando erro (status = ' + response.status + ')');
    }
});
console.log('Após a requisição HTTP...');