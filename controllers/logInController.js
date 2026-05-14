const fs = require('fs').promises 

const postLogin = async (req, res) => {
    try{
        const data = await fs.readFile('./data/usuariosRegistrados.json', 'utf-8')
        const usuarios = JSON.parse(data)

        const { email, password } = req.body

        const user = usuarios.find(user => user.email === email && user.password === password)
        if (user) {
            res.status(200).json({ message : 'Entrando...' })
        }
        else {
            res.status(400).json({ message : 'email o contraseña incorrectos, por favor verifique sus credenciales' })
        }
    }catch (error) {
        res.status(500).json({ message : 'Error al procesar la solicitud'})
    }
}

module.exports = { postLogin}