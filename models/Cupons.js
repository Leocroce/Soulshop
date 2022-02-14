const { model, Schema } = require('mongoose')

const Cupom = model(
    "Cupom",
    new Schema({
        titulo: { type: String, required: true },
        nomeProduto: { type: String, required: true },
        nomeLoja: { type: String, required: true},
        desconto: { type: Number, required: true},
    })
)

module.exports = Cupom;