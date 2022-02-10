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

    


}