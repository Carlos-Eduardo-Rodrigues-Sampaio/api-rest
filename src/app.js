import express from 'express'
const app = express()

// Criando a rota raiz
app.get('/', (req, res) => {
    res.send('Minha API REST com express!')
})

// Rota lista
app.get('/lista', (req, res) => {
    res.send('Lista do SENAC');
});

export default app