const http = require("http")
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Página de Livros',
    '/autores': 'Listagem de Autores',
    '/sobre': 'Info sobre o Projeto'
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})