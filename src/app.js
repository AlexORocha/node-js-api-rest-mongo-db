import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão com o Banco de Dados'))
db.once("open", () => {
    console.log('Conexão com o Banco de Dados feita com sucesso!')
})

const app = express();
app.use(express.json());

routes(app);

export default app  