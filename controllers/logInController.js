const fs = require('fs').promises 

const postLogin = async (req, res) => {
    try{
        data = await fs.readFile('.data/usuarios.json', 'utf-8')
        data = JSON.parse(data)

        const { email, password } = req.body

        const user = data.find(user => user.email === email && user.password === password)
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

const getLogin = (req, res) => {
    try{
        data = fs.readFile('.data/usuarios.json', 'utf-8')
        data = json.parse(data)

        const {id} = req.params

        const user = data.find(user => user.id === id)
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(400).json({ message : 'Usuario no encontrado'})
        }
        
    }catch (error){
        res.status(500).json({ message : 'Error al procesar la solicitud'})
    }
}

module.exports = { postLogin, getLogin }