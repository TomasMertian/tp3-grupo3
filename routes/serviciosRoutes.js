const express = require('express')
const router = express.Router()
const controller = require('../controllers/serviciosController')

router.get('/', controller.getServicios)

router.get('/:id', controller.getServicioById)

module.exports = router
