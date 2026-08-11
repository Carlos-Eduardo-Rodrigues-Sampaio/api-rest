import express from 'express'
const app = express()

// Mock
const lista = [
    {id: 1, nome: 'Bruno', curso: 'ADS'},
    {id: 2, nome: 'Maria', curso: 'ADS'},
    {id: 3, nome: 'Çara', curso: 'ADS'},
    {id: 4, nome: 'José', curso: 'ADS'},
]

// Criando a rota raiz
app.get('/', (req, res) => {
    res.send('Minha API REST com express!')
})

// Rota lista
app.get('/lista', (req, res) => {
    res.send(lista);
});

export default app