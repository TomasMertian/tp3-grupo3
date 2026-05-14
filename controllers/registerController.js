const fs = require('fs').promises

const obtenerUsuarios = async () => {
  const data = await fs.readFile('./data/usuariosRegistrados.json', 'utf8')
  return JSON.parse(data)
}

const buscarUsuarioPorEmail = async (email) => {
  const usuarios = await obtenerUsuarios()
  return usuarios.find((u) => u.email === email)
}

const verificarUsuarioExiste = async (req, res) => {
  try {
    const { email } = req.params
    const usuarioExiste = await buscarUsuarioPorEmail(email)

    if (usuarioExiste) {
      return res
        .status(200)
        .json({ existe: true, message: 'El usuario ya esta registrado' })
    } else {
      return res
        .status(200)
        .json({ existe: false, message: 'El usuario no esta registrado' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'No se pudo verificar el usuario' })
  }
}

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email, password } = req.body

    if (!nombre || !apellido || !email || !password) {
      return res.status(400).json({
        error:
          'Todos los campos (nombre, apellido, mail, password) son requeridos'
      })
    }

    const usuarioExiste = await buscarUsuarioPorEmail(email)

    if (usuarioExiste) {
      return res.status(409).json({ error: 'El correo ya esta registrado' })
    }

    const usuarios = await obtenerUsuarios()
    const usuarioNuevo = {
      id: Date.now().toString(),
      nombre,
      apellido,
      email,
      password
    }

    usuarios.push(usuarioNuevo)

    await fs.writeFile(
      './data/usuariosRegistrados.json',
      JSON.stringify(usuarios, null, 2)
    )

    return res.status(201).json({
      message: 'Usuario registrado exitosamente',
      userId: usuarioNuevo.id
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'No se pudo registrar el usuario' })
  }
}

module.exports = { verificarUsuarioExiste, registrarUsuario }
