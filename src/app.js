import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

db.on("error", console.log.bind(console, 'Erro de conexão com o Banco de Dados'))
db.once("open", () => {
    console.log('Conexão com o Banco de Dados feita com sucesso!')
})

const app = express();
app.use(express.json());


app.get('', (req, res) => {
    res.status(200).send('Curso de NodeJS');
})


app.get('/livros', async (req, res) => {
    try {
      const resultado = await livros.find();
      res.status(200).json(resultado);
    } catch (error) {
      console.error('Erro ao obter os livros:', error);
      res.status(500).json({ error: 'Erro ao obter os livros' });
    }
});


app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com Sucesso!')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1);
    res.status(204).send(`O livro ${id} foi excluído com sucesso`)
})


function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app  