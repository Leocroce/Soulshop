const { Router } = require('express')
const LojaController = require('../controllers/LojaController')
const router = Router()

router.get('/lojas', LojaController.paginaLojas);
router.get('/lojas/novo', LojaController.paginaAdicionarLoja);
router.get('/lojas/enviar', LojaController.addLoja)

module.exports = router;