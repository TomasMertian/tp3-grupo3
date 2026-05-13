const express = require('express')
const router = express.Router()
const controller = require('../controllers/equipoController')

router.get('/', controller.getEquipo)

module.exports = router