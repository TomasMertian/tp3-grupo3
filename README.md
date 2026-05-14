# tp3-grupo3

Distribución de archivos y carpetas:

```

├── 📂 BACKEND-REPO (image_ce303b.png)
│   ├── 📂 .vscode/
│   │   └── 📄 settings.json
│   ├── 📂 controllers/
│   │   ├── 📄 equipoController.js
│   │   ├── 📄 logInController.js
│   │   ├── 📄 perfilController.js
│   │   ├── 📄 registerController.js
│   │   └── 📄 serviciosController.js
│   ├── 📂 data/
│   │   ├── 📄 equipo.json
│   │   ├── 📄 servicios.json
│   │   ├── 📄 serviciosDetalle.json
│   │   └── 📄 usuarios.json
│   ├── 📂 models/
│   │   └── 📄 server.js
│   ├── 📂 routes/
│   │   ├── 📄 equipoRoutes.js
│   │   ├── 📄 logInRoutes.js
│   │   ├── 📄 perfilRoutes.js
│   │   ├── 📄 registerRoutes.js
│   │   └── 📄 serviciosRoutes.js
│   ├── 📄 .env
│   ├── 📄 .eslintrc.json
│   ├── 📄 .gitignore
│   ├── 📄 app.js
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 README.md
```

```
└── 📂 FRONTEND-REPO (image_ce3076.png)
    ├── 📂 assets/
    │   ├── 🖼️ COMPONENTES.jpeg
    │   ├── 🖼️ FALLAS.png
    │   ├── 🖼️ LIMPIEZA.jpg
    │   ├── 🖼️ reparacion.jpg
    │   └── 🖼️ (fotos personal 1-4)
    ├── 📂 css/
    │   └── 📄 style.css
    ├── 📂 img_home/
    │   ├── 🖼️ DESCRIPTIVA.png
    │   └── 🖼️ LOGO.jpeg
    ├── 📂 js/
    │   ├── 📄 equipo.js
    │   ├── 📄 logIn.js
    │   ├── 📄 register.js
    │   ├── 📄 script.js
    │   └── 📄 servicios.js
    ├── 📂 pages/
    │   ├── 📄 contacto.html
    │   ├── 📄 equipo.html
    │   ├── 📄 faq.html
    │   ├── 📄 login.html
    │   ├── 📄 pedido.html
    │   ├── 📄 register.html
    │   └── 📄 servicios.html
    ├── 📄 index.html
    └── 📄 README.md
```

## Sección: Servicios

Por: Lavizzari Ariadna Lourdes

Backend: estructura y lógica

Data/servicios.json: Este archivo contiene la lista principal de los servicios. Es un formato de texto simple (JSON) que el servidor lee para saber que tiene que mostrar en la página principal.

Ejemplo:

```json
    {
      "id": 1,
      "precio": 20000,
      "desc": "Limpieza integral"
    },
...  //resto de los servicios
```

serviciosRoutes.js:
Este archivo define los caminos (rutas) por donde viajan las peticiones.
router.get('/', ...): Define la ruta principal. Su función es recibir el pedido de "quiero ver todos los servicios" y pasarselo al controllador.

`router.get('/:id', ...):` Crea una ruta inteligente que acepta un número (ID). Su función es capturar ese número para buscar un servicio específico.

serviciosController.js:
fs.readFile(...): Su función es abrir y leer el archivo de texto donde están guardados los servicios.
JSON.parse(data): Convierte el texto plano del archivo en objetos de programación para que la computadora pueda trabajar con ellos.

`res.status(200).json(...):` Su función es enviar los datos al usuario confirmando que salió bien (código 200).

`parseInt(req.params.id)`: Toma el ID que viene en la URL (que llega como texto) y lo transforma en un número para poder compararlo.

`servicios.find(...):` Es una función de busqueda. Recorre toda la lista hasta encontrar el servicio que coincida con el ID solicitado.

`res.status(404):` Su función es dar aviso de error si el usuario pidió un ID que no existe.

`catch (error):` Su función es actuar como un "seguro", si algo falla, evita que el programa se caiga y avisa del error.

~~ El await que esta presente más de una vez se asegura de que la información llegue antes de intentar usarla ~~

servicios.js:
Este archivo corre en el navegador y "dibuja" lo que el usuario ve.
document.querySelector('#card-container'): Busca en el HTML el lugar donde van a ir todas las tajetas de servicios.

async function servicios(): Define la función principal. EL async es obligatorio para poder usar el await adentro.

try {...}: Es un bloque de seguridad, dice "trata de hacer todo esto, pero si algo sale mal avisame en el catch".

const response = await fetch(...): Su función es llamar a la API y pedir la lista de servicios.

data.forEach(servicio => { ... }): Esta es la parte repetitiva. Por cada servicio que el servidor mandó, va a ejecutar las instrucciones que están adentro.

document.createElement('div'): Crea un "molde" vacío en la memoria para una tarjeta.

div.classList.add('tarjeta-servicio'): Le pega una etiqueta de CSS a ese molde para que tenga el diseño y los colores correctos.

div.innerHTML = ...: Rellena el molde con el título (desc), la imagen y el precio del servicio actual. Básicamente, escribe el código HTML de cada tarjeta automáticamente.

Dato clave: Al usar ${servicio.desc} dentro de las comillas inclinadas, es como decirle al JS que salga del texto plano y busque en el JSON el valor correspondiente.

Node.js, Express, npm, consumo de APIs y deploys

## Sección: Gestión de Equipo

Por: Renata Turani

Backend: estructura y lógica

data/equipo.json

Creé este archivo para centralizar la información de los integrantes. Funciona como nuestra base de datos, almacenando nombres, puestos, descripciones, contactos y rutas de imágenes.

controllers/equipoController.js

Desarrollé la lógica para leer los datos. Use fs/promises para realizar una lectura de archivos asíncrona. Implementé try/catch para que si ocurre algún problema al cargar los datos, el servidor simplemente mande un aviso de error.

routes/equipo.routes.js

Definí el endpoint principal (GET/equipo). Vinculé esta ruta con el controlador anterior para que cuando reciba la petición, se envíen los datos en formato JSON.

models/server.js

Integré las rutas de equipo en la clase global del servidor y configuré los permisos necesarios (CORS) para que nuestra página tenga “permiso” de pedirle la información al servidor y así mostrarla sin errores.

Frontend: consumo de la API

pages/equipo.html

Modifiqué la estructura original. Eliminé todos los elementos div y dejé un contenedor vacío con el id contenedor-equipo. También agregué el script de JS al final del archivo.

js/equipo.js

Creé este script desde cero. Su función es realizar un fetch a la URL de la API. Podemos decir que la funcion es “asíncrona” y recorre el arreglo de integrantes usando un forEach, generando el HTML de las tarjetas dinámicamente y respetando los estilos CSS que ya teníamos.

Ejemplo de estructura del archivo JSON

Utilicé un arreglo de objetos para representar a cada integrante. Cada objeto sigue este formato:

```json
 {
   "id": 1,
   "nombre": "Alan",
   "puesto": "Encargado de mostrador",
   "leyenda": "\"Responsable de brindar una atención personalizada...\"",
   "telefono": "+54 291 543 3456",
   "email": "alanmartinez@gmail.com",
   "imagen": "../assets/img/personal4.jpg"
 }
]
```

## Seccion GET perfil por id

Federica Vignales

Backend

data/usuarios.json

En este archivo guardé la información de los usuarios en formato JSON.
Cada usuario tiene un id y distintos datos que luego se muestran en el perfil.

routes/perfilRoutes.js

Creé la ruta para obtener un perfil según su id.
La ruta recibe el parámetro desde la URL y llama al controlador correspondiente.

Ejemplo:
GET /perfil/1

controllers/perfilController.js

Implementé la lógica para buscar un usuario por su id.

El controlador:

Lee el archivo usuarios.json.

Busca el usuario correspondiente.

Devuelve la información en formato JSON.

Maneja errores en caso de que el usuario no exista.

Frontend

pages/perfil.html

Creé la estructura HTML de la página de perfil.
Incluí un contenedor donde se muestran dinámicamente los datos del usuario y vinculé el archivo perfil.js.

css/style.css

Realicé los estilos de la página de perfil para organizar la información y mantener el diseño del proyecto.

js/perfil.js

Desarrollé el consumo de la API utilizando fetch.

El script:

Obtiene el id desde la URL.

Hace una petición al backend.

Recibe los datos del usuario.

Genera el contenido dinámicamente en la página.

## Sección: Register

Por: Mertian Tomas

Backend: estructura y lógica

- **Data/usuariosRegistrados.json:** Almacena la lista de usuarios registrados. Cada objeto representa un usuario con sus datos personales.

Ejemplo:

```json
[
  {
    "id": "1778632009235",
    "nombre": "Test",
    "apellido": "User",
    "email": "test@test.com",
    "password": "123456"
  }
]
```

---

- **registerRoutes.js:** Define las dos rutas del registro y las conecta al controlador.

`router.get('/check/:email', ...)`: Recibe un email en la URL y lo manda al controlador para verificar si ya existe ese usuario.

`router.post('/', ...)`: Recibe los datos del formulario y los manda al controlador para crear un usuario nuevo.

---

- **registerController.js:** Contiene toda la lógica del registro: leer usuarios, verificar existencia y guardar nuevos registros.

`obtenerUsuarios()`: Abre y lee el archivo JSON, convirtiéndolo en objetos utilizables. Es la base de las demás funciones.

`buscarUsuarioPorEmail(email)`: Recorre la lista de usuarios y devuelve el que coincida con el email buscado.

`verificarUsuarioExiste(...)`: Usa la búsqueda por email y responde con `existe: true/false`. Si algo falla, devuelve un error 500.

`registrarUsuario(...)`: Primero valida que lleguen todos los campos obligatorios (400 si falta alguno). Luego verifica que el email no esté en uso (409 si ya existe). Si todo está bien, crea el usuario con un ID único, lo agrega a la lista y sobreescribe el archivo JSON. Responde con 201 si el registro fue exitoso.

`fs.writeFile(...)`: Guarda el array actualizado en el archivo, reemplazando el contenido anterior.

El `Date.now().toString()` genera un ID único usando la marca de tiempo exacta del momento del registro.

---

- **server.js (fragmento):**

`this.app.use("/register", require("../routes/registerRoutes"))`: Engancha todas las rutas bajo el prefijo `/register`, quedando como `/register/check/:email` para la verificación y `/register/` para el alta de usuario.

---

Frontend: consumo de la API

- **js/register.js:** Corre en el navegador y maneja toda la lógica del formulario: valida el email en tiempo real y envía los datos al backend al momento del submit.

`const URL_API`: Almacena la URL base del servidor desplegado. Usarla como constante evita repetirla en cada fetch y facilita cambiarla si el servidor cambia de dirección.

`document.getElementById(...)`: Obtiene referencias al formulario, al input de email y al div de mensajes para poder interactuar con ellos desde el script.

---

`inputEmail.addEventListener('blur', ...)`: Detecta cuando el usuario sale del campo email. En ese momento dispara la verificación sin esperar a que envíe el formulario.

`emailIngresado.trim()`: Elimina los espacios vacíos al principio y al final del valor ingresado antes de enviarlo.

`async function verificarSiEmailExiste(email)`: Consulta al backend si el email ya existe apenas el usuario termina de escribirlo.

`encodeURIComponent(email)`: Convierte caracteres especiales del email (como `@` o `.`) a un formato seguro para incluirlos en la URL.

`datos.existe === true`: Si el backend confirma que el email ya está en uso, muestra el aviso en pantalla agregando la clase CSS `mostrar`. Si no, la quita.

---

`formulario.addEventListener('submit', ...)`: Escucha el envío del formulario y ejecuta el proceso de registro.

`e.preventDefault()`: Cancela el comportamiento por defecto del navegador (recargar la página) para manejar el envío desde JS.

`JSON.stringify({...})`: Convierte los datos del formulario en texto JSON para enviarlos en el cuerpo de la petición.

`method: 'POST'` y `headers: { 'Content-Type': 'application/json' }`: Indican al servidor que se están enviando datos nuevos en formato JSON.

`respuesta.ok === true`: Si el servidor respondió con éxito, muestra la confirmación y limpia el formulario con `formulario.reset()`. Si falló, muestra un mensaje de error.

`catch (error)`: Captura errores de red o de conexión y muestra un aviso al usuario en lugar de dejar la pantalla en blanco.

(servicios.js,serviciosDetalle.js,serviciosController.js)

## Surop Maitena

En esta parte del trabajo se implementó la funcionalidad relacionada con la visualización y consulta detallada de los servicios ofrecidos por la página.

Primero se trabajó en el backend, agregando una nueva ruta para poder obtener la información individual de cada servicio mediante su identificador. Para esto se implementó el endpoint GET /servicios/:id, cuya función es recibir el id del servicio seleccionado y devolver la información específica de ese servicio.

Dentro del archivo serviciosController.js se incorporó la función getServicioById, encargada de leer el archivo serviciosDetalle.json, procesar la información y buscar el servicio correspondiente según el id recibido desde la URL. Una vez encontrado, devuelve los datos en formato JSON para que puedan ser consumidos desde el frontend. También se incluyó el manejo de errores, devolviendo un mensaje en caso de que el servicio no exista o si ocurre un problema al leer los datos.

Además, se creó el archivo serviciosDetalle.json, donde se almacenó información complementaria para cada servicio. En este archivo se incorporaron datos más específicos, como una descripción ampliada, el tiempo estimado de entrega, la categoría a la que pertenece cada servicio y su disponibilidad. Cada registro mantiene el mismo id que el archivo principal de servicios, para poder relacionar correctamente la información.

Ejemplo:

[

{

"id": 1,

"detalle_largo": "Limpieza completa de notebook o PC, incluyendo ventiladores y componentes internos.",

"tiempo_entrega": "24 horas",

"disponible": true,

"categoria": "Mantenimiento"

}

]

En el frontend se realizó la integración con la API. Inicialmente se consumió el endpoint general de servicios para mostrar todas las tarjetas disponibles en pantalla, incluyendo el nombre, precio e imagen correspondiente. Posteriormente, se agregó un botón de interacción en cada tarjeta con la opción "Ver detalle".

Al presionar dicho botón, se ejecuta una nueva solicitud al endpoint individual (GET /servicios/:id), utilizando el id del servicio seleccionado. Con la respuesta obtenida, la aplicación muestra información adicional debajo de la tarjeta correspondiente, sin necesidad de recargar la página ni redirigir al usuario.

## Sección: Login

Por: Santiago De Dios

Backend: estructura y lógica

- **Data/usuariosRegistrados.json:** Almacena la lista de usuarios registrados. Cada objeto representa un usuario con sus datos personales. Es el archivo que el controlador de login consulta para verificar las credenciales ingresadas.

Ejemplo:

```json
[
  {
    "id": "1778632009235",
    "nombre": "Test",
    "apellido": "User",
    "email": "test@test.com",
    "password": "123456"
  }
]
```

---

- **logInRoutes.js:** Define la ruta del login y la conecta al controlador.

`router.post('/', ...)`: Recibe los datos del formulario (email y contraseña) y los manda al controlador para verificar si corresponden a un usuario registrado.

---

- **logInController.js:** Contiene toda la lógica de autenticación: leer usuarios y verificar credenciales.

`fs.readFile('./data/usuariosRegistrados.json', 'utf-8')`: Abre y lee el archivo JSON con los usuarios registrados, convirtiéndolo en objetos utilizables para la búsqueda.

`JSON.parse(data)`: Convierte el texto leído del archivo en un array de objetos JavaScript.

`usuarios.find(user => user.email === email && user.password === password)`: Recorre la lista de usuarios y devuelve el primero cuyo email y contraseña coincidan exactamente con los recibidos. Si no hay coincidencia, devuelve `undefined`.

Si el usuario existe, responde con status `200` y un mensaje de confirmación. Si no, responde con `400` indicando que las credenciales son incorrectas. Si ocurre un error al leer el archivo, responde con `500`.

---

- **server.js (fragmento):**

`this.app.use("/login", require("../routes/logInRoutes"))`: Engancha todas las rutas bajo el prefijo `/login`, quedando como `/login/` para la verificación de credenciales.

---

Frontend: consumo de la API

- **js/logIn.js:** Corre en el navegador y maneja toda la lógica del formulario: captura los datos ingresados y los envía al backend al momento del submit.

`const URL_API`: Almacena la URL base del servidor desplegado. Usarla como constante evita repetirla en cada fetch y facilita cambiarla si el servidor cambia de dirección.

`document.querySelector('.login-form')` y `document.getElementById(...)`: Obtienen referencias al formulario, al input de email y al div de mensajes para poder interactuar con ellos desde el script.

---

`formulario.addEventListener('submit', ...)`: Escucha el envío del formulario y ejecuta el proceso de autenticación.

`e.preventDefault()`: Cancela el comportamiento por defecto del navegador (recargar la página) para manejar el envío desde JS.

`inputEmail.value.trim()`: Elimina los espacios vacíos al principio y al final del email ingresado antes de enviarlo.

`JSON.stringify({ email, password })`: Convierte las credenciales del formulario en texto JSON para enviarlas en el cuerpo de la petición.

`method: 'POST'` y `headers: { 'Content-Type': 'application/json' }`: Indican al servidor que se están enviando datos en formato JSON.

`respuesta.ok === true`: Si el servidor respondió con éxito, muestra la confirmación y limpia el formulario con `formulario.reset()`. Si falló, muestra un mensaje de error.

`catch (error)`: Captura errores de red o de conexión y muestra un aviso al usuario en lugar de dejar la pantalla en blanco.

```

```
