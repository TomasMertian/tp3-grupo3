const express = require("express");
const router = express.Router();
const controller = require("../controllers/perfilController");

router.get("/:id", controller.getPerfilById);

module.exports = router;
