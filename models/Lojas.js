const { model, Schema } = require('mongoose')

const Loja = model(
    "Loja",
    new Schema({
        cnpj: { type: String, required: true },
        nome: { type: String, required: true },
        endereco: { type: String, required: true},
        telefone: { type: String, required: true},
    })
)

module.exports = Loja;