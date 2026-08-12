import express from 'express'
const app = express()

// Express deve interpretar o corpo (body) como JSON.
app.use(express.json());

// Mock
const alunos = [
    {id: 1, nome: 'Bruno', curso: 'ADS'},
    {id: 2, nome: 'Maria', curso: 'ADS'},
    {id: 3, nome: 'Lara', curso: 'ADS'},
    {id: 4, nome: 'José', curso: 'ADS'},
]

// Função auxiliar
function buscarAlunoPorId(id) {
    return alunos.filter( aluno => aluno.id == id )
}

function buscarIndexAluno(id) {
    return alunos.findIndex( aluno => aluno.id == id )
}

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

// Delete
app.delete('/alunos/:id', (req, res) => {
    let index = buscarIndexAluno(req.params.id)
    // console.log(index)
    alunos.splice(index, 1)
    res.send(`Aluno com id ${req.params.id} excluido com sucesso!`)
 })

 // 

export default app