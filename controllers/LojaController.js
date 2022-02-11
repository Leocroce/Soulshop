const Loja = require('../models/Lojas')

class LojaController {
    static async paginaLojas(req, res) {
        let query = {}
        const { nomeLoja } = req.query
        if(nomeLoja) {
            query = {nome: { $regex: `${nomeLoja}`, $options: 'i' }}
        }

        const lojas = await Loja.find(query).lean()
        res.render('lojas', { lojas, nomeLoja });
    }

    static async paginaAdicionarLoja(req, res) {
        res.render('add_loja');
    }

    static async addLoja(req, res) {
        const { cnpj, nome, endereco, telefone } = req.body
        const loja = Loja({ cnpj, nome, endereco, telefone })
        await loja.save();

        res.redirect('/lojas')
    }
    
}

module.exports = LojaController;
