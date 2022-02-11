const { Router } = require('express')
const LojaController = require('../controllers/LojaController')
const router = Router()

router.get('/lojas', LojaController.paginaLojas);
router.get('/lojas/novo', LojaController.paginaAdicionarLoja);
router.post('/lojas/enviar', LojaController.addLoja);
router.get('/lojas/editar/:id', LojaController.paginaEditLoja);
router.post('/lojas/atualizar', LojaController.editLoja);
router.post('/lojas/deletar', LojaController.deleteLoja);

module.exports = router;