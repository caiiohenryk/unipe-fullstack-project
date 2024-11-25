import FilmeModel from '../Models/FilmeModel.js';

export default class FilmeController {

    // salvarFilme
    static async salvarFilme(req, res) {
        const {titulo, descricao, diretor, nota} = req.body;

        const filme = {
            titulo, descricao, diretor, nota
        }

        const novoFilme = await FilmeModel.create(filme);

        res.status(201).json({filme: novoFilme});
    }

    // Delete
    static async deletarFilme(req, res) {
        const { id } = req.params;

        const filme = await FilmeModel.destroy({
            where: {
                id: id
            }
        });
        return res.status(200);
    }

    // Find By Id
    static async findById(req, res) {
        const { id } = req.params;

        const findFilme = await FilmeModel.findAll({
            where: {
                id: id
            }
        });

        return res.status(200).json({
            filme: findFilme
        });
    }

    // Editar Filme
    static async editFilme(req, res) {
        const { id } = req.params;
        const { titulo, nota, diretor, descricao } = req.body;

        const newFilme = await FilmeModel.findByPk(id);

        newFilme.titulo = titulo;
        newFilme.nota = nota;
        newFilme.diretor = diretor;
        newFilme.descricao = descricao;

        await newFilme.save();

        return res.status(200).json({
            filme: newFilme
        });

    }

    static async getAll(req, res) {
        const filmes = await FilmeModel.findAll();
        res.status(200).json({
            filmes: filmes
        });
    }

}