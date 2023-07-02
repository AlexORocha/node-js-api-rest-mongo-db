import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .post("/livros", LivroController.cadastrarLivros)
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPelaEditora) 
    .get("/livros/:id", LivroController.listarLivroEspecifico)       
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro)
    
export default router;