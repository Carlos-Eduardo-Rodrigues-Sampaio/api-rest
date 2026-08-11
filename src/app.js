import express from 'express'
const app = express()

// Mock
const alunos = [
    {id: 1, nome: 'Bruno', curso: 'ADS'},
    {id: 2, nome: 'Maria', curso: 'ADS'},
    {id: 3, nome: 'Lara', curso: 'ADS'},
    {id: 4, nome: 'José', curso: 'ADS'},
]

// Criando a rota raiz
app.get('/', (req, res) => {
    res.send('Minha API REST com express!')
})

// Rota lista alunos GET
app.get('/alunos', (req, res) => {
res.status(200).send(alunos);
});

// Rota lista alunos POST
app.post('/alunos', (req, res) => {
    alunos.push(req.body)
    res.status(201).send('Alunos cadastrado com sucesso!');
})

export default app