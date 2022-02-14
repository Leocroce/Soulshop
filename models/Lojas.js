//Modulo mongoose
const { model, Schema } = require('mongoose')

//Criação do modelo de Loja (coleção no mongo)
//Adição dos campos com os tipos
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