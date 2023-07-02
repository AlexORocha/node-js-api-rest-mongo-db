import autores from '../models/autor.js';


// Classe do Controlador do autor - CRUD do Autor
class AutorController{


    // Método de Listar autor
    static listarAutores = async (req, res) => {
        try {
            const resultado = await autores.find();
            res.status(200).json(resultado);
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao obter os autores',
                error: err.message
            });
        }
    };


    // Método de Listar autor Específico
    static listarAutorEspecifico = async (req, res) => {
        try {
            const id = req.params.id;
            let autor = await autores.findById(id);
            res.status(200).json(autor);
        } catch (err) {
            res.status(400).json({
                message: 'Erro ao obter o autor informado',
                error: err.message
            });
        }
    };


    // Método para Cadastrar autor
    static cadastrarAutores = async (req, res) => {
        try {
            let novo_autor = new autores(req.body);
            await novo_autor.save()
            res.status(201).json(novo_autor.toJSON())
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao cadastrar o autor',
                error: err.message
            });
        }
    }


    // Método para Atualizar o autor
    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(
                id,
                {
                    $set: req.body
                }
            );
            res.status(200).json({
                message: "autor atualizado com sucesso"
            })       
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao atualizar o autor',
                error: err.message
            });
        }
    }


    // Método para Deletar o autor
    static deletarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id)
            res.status(204).json('autor removido com sucesso')
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao remover o autor',
                error: err.message
            });
        }
    }

}

export default AutorController;