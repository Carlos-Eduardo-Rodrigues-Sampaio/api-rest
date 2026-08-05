const express = require('express');
const app = express();

const port = 3000;

// Criando a rota raiz
app.get('/', (req, res) => {
    res.send('Minha API REST com express!');
})

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})