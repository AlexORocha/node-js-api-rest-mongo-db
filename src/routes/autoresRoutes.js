import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .post("/autores", AutorController.cadastrarAutores)
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.listarAutorEspecifico)    
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.deletarAutor)
    
export default router;