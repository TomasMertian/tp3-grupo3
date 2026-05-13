const fs = require("fs").promises;

const getPerfilById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await fs.readFile("./data/usuarios.json", "utf8");
    const usuarios = JSON.parse(data);

    const usuario = usuarios.find((u) => u.id === id);

    if (!usuario) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "No se pudo obtener el perfil",
    });
  }
};

module.exports = { getPerfilById };
