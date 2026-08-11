import express from 'express'
const app = express()

// Criando a rota raiz
app.get('/', (req, res) => {
    res.send('Minha API REST com express!')
})

export default app