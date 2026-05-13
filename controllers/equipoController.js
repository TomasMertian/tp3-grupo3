const fs = require('fs').promises
const path = require('path')

// funcion que obtiene los integrantes del equipo desde el archivo JSON
const getEquipo = async (req, res) => {
  try {
    // ruta del archivo equipo.json
    const rutaArchivo = path.join(__dirname, '../data/equipo.json')

    // lectura del archivo JSON
    const data = await fs.readFile(rutaArchivo, 'utf-8')

    // convierte al JSON en un objeto de javascript
    const equipo = JSON.parse(data)

    return res.status(200).json(equipo)
  } catch (error) {
    // si hay error devuelve el mensaje:
    return res.status(500).json({ mensaje: 'Error al obtener los datos' })
  }
}

module.exports = { getEquipo }
