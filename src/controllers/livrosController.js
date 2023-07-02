import livros from '../models/livro.js';


// Classe do Controlador do Livro - CRUD do Livro
class LivroController{


    // Método de Listar Livro
    static listarLivros = async (req, res) => {
        try {
            const resultado = await livros.find().populate('autor');
            res.status(200).json(resultado);
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao obter os livros',
                error: err.message
            });
        }
    };


    // Método de Listar Livro Específico
    static listarLivroEspecifico = async (req, res) => {
        try {
            const id = req.params.id;
            let livro = await livros.findById(id).populate('autor', 'nome');
            res.status(200).json(livro);
        } catch (err) {
            res.status(400).json({
                message: 'Erro ao obter o livro informado',
                error: err.message
            });
        }
    };


    // Método para Cadastrar Livro
    static cadastrarLivros = async (req, res) => {
        try {
            let novo_livro = new livros(req.body);
            await novo_livro.save()
            res.status(201).json(novo_livro.toJSON())
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao cadastrar o livro',
                error: err.message
            });
        }
    }


    // Método para Atualizar o Livro
    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(
                id,
                {
                    $set: req.body
                }
            );
            res.status(200).json({
                message: "Livro atualizado com sucesso"
            })       
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao atualizar o livro',
                error: err.message
            });
        }
    }


    // Método para Deletar o Livro
    static deletarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id)
            res.status(204).json('Livro removido com sucesso')
        } catch (err) {
            res.status(500).json({
                message: 'Erro ao remover o livro',
                error: err.message
            });
        }
    }

    // Método para Listar Livros de uma Determinada Editora
    static listarLivroPelaEditora = async (req, res) => {
        try{
            const editora = req.query.editora;
            let livros_editora = await livros.find({
                'editora': editora
            })
            res.status(200).json(livros_editora);
        }
        catch{
            res.status(500).json({
                message: 'Erro ao buscar livro da editora',
                error: err.message
            });
        }
    }

}

export default LivroController;