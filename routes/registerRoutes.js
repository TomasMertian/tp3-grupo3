const express = require('express')
const router = express.Router()
const controller = require('../controllers/registerController')

router.get('/check/:email', controller.verificarUsuarioExiste)
router.post('/', controller.registrarUsuario)

module.exports = router
