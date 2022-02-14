//Importando o modelo 
const Loja = require('../models/Lojas')

//Criação do controle de banco de dados
class LojaController {
    //Metodo de busca e renderização da pagina da Loja
    static async paginaLojas(req, res) {
        let query = {}
        const { nomeLoja } = req.query
        if(nomeLoja) {
            query = {nome: { $regex: `${nomeLoja}`, $options: 'i' }}
        }

        const lojas = await Loja.find(query).lean()
        res.render('lojas', { lojas, nomeLoja });
    }
    //Metodo de renderização da pagina de add loja
    static async paginaAdicionarLoja(req, res) {
        res.render('add_loja');
    }
    //Metodo de adicionar loja (post) 
    static async addLoja(req, res) {
        const { cnpj, nome, endereco, telefone } = req.body
        const loja = Loja({ cnpj, nome, endereco, telefone })
        await loja.save();

        res.redirect('/lojas')
    }
    //Metodo de renderizar pagina de editar loja pelo id (get)
    static async paginaEditLoja(req, res) {
        const { id } = req.params;
        const loja = await Loja.findById(id).lean()

        res.render('editar_loja', { loja })
    }
    //Metodo de editar loja (post)
    static async editLoja(req, res) {
        const { id, cnpj, nome, endereco, telefone } = req.body

        await Loja.findByIdAndUpdate(id, { cnpj, nome, endereco, telefone })

        res.redirect('/lojas')
    }
    //Metodo de deletar loja (post)
    static async deleteLoja(req, res) {
        const { id } = req.body
        await Loja.findByIdAndDelete(id)

        res.redirect('/lojas')
    }
    
}

module.exports = LojaController;
