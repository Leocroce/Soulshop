//Importando o modelo 
const Cupom = require('../models/Cupons')

//Criação do controle de banco de dados
class CupomController {
    //Metodo de busca e renderização da pagina de Cupom
    static async paginaCupons(req, res) {
        let query = {}
        const { nomeCupom } = req.query
        if(nomeCupom) {
            query = {nome: { $regex: `${nomeCupom}`, $options: 'i' }}
        }

        const cupons = await Cupom.find(query).lean()
        res.render('cupons', { cupons, nomeCupom });
    }
    //Metodo de renderização da pagina de add cupom
    static async paginaAdicionarCupom(req, res) {
        res.render('add_cupom');
    }
    //Metodo de adicionar cupom (post) 
    static async addCupom(req, res) {
        const { titulo, nomeProduto, nomeLoja, desconto } = req.body
        const cupom = Cupom({ titulo, nomeProduto, nomeLoja, desconto })
        await cupom.save();

        res.redirect('/cupons')
    }
    //Metodo de renderizar pagina de editar cupom pelo id (get)
    static async paginaEditCupom(req, res) {
        const { id } = req.params;
        const cupom = await Cupom.findById(id).lean()

        res.render('editar_cupom', { cupom })
    }
    //Metodo de editar cupom (post)
    static async editCupom(req, res) {
        const { id, titulo, nomeProduto, nomeLoja, desconto } = req.body

        await Cupom.findByIdAndUpdate(id, { titulo, nomeProduto, nomeLoja, desconto })

        res.redirect('/cupons')
    }
    //Metodo de deletar cupom (post)
    static async deleteCupom(req, res) {
        const { id } = req.body
        await Cupom.findByIdAndDelete(id)

        res.redirect('/cupons')
    }
    
}

module.exports = CupomController;
