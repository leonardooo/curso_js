function tratandoErro() {
    throw new Error('Mensagem de erro!');
}
try {
    tratandoErro();
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}