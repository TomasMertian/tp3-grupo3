const express = require('express')
const router = express.Router()
const logInController = requiere('../controllers/logInController')

router.post('/', logInController.postLogin)

module.exports = router