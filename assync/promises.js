function getName() {
    var myInit = { method: 'GET' };

    fetch('https://swapi.co/api/people/1/', myInit)
        .then(response => response.json())
        .catch(() => {
            console.log('Erro no fetch...');
        })
        .then(data => {
            document.getElementById('name').innerHTML = data.name;
        })
        .catch(() => {
            console.log('Erro na conversão do json');
        })
        .then(() => {
            console.log('Do this, no matter what happened before');
        });
    console.log('......');
}
