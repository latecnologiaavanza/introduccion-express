## 🧭 ¿Qué es el **Routing (enrutamiento)**?

El **routing** o **enrutamiento** es el proceso mediante el cual un **servidor web** decide **qué acción ejecutar** o **qué respuesta devolver** cuando un cliente (por ejemplo, tu navegador) hace una **solicitud (request)** a una **ruta (URL)** específica.

En otras palabras:

> El **routing** determina **qué debe pasar cuando el usuario visita una dirección concreta** de tu aplicación web.

---

## 🧩 Ejemplo simple

Imagina que tu servidor Express tiene las siguientes rutas:

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bienvenido a la página principal')
})

app.get('/contacto', (req, res) => {
    res.send('Esta es la página de contacto')
})

app.get('/productos', (req, res) => {
    res.send('Lista de productos')
})

app.listen(3000)
console.log('Servidor corriendo en el puerto 3000')
```

### ¿Qué pasa aquí?

* Si visitas 👉 `http://localhost:3000/`
  → El servidor responde: “Bienvenido a la página principal”.

* Si visitas 👉 `http://localhost:3000/contacto`
  → El servidor responde: “Esta es la página de contacto”.

* Si visitas 👉 `http://localhost:3000/productos`
  → El servidor responde: “Lista de productos”.

🧠 Cada **ruta (`/`, `/contacto`, `/productos`)** define **una respuesta diferente**.
Eso es exactamente lo que hace el **routing**.

---

## ⚙️ ¿Cómo funciona internamente?

1. El usuario envía una **solicitud HTTP** (por ejemplo, un GET o POST).
2. Express **compara la URL** de la solicitud con las rutas definidas.
3. Cuando encuentra una coincidencia, ejecuta la **función asociada (callback)**.
4. Esa función devuelve la **respuesta** al cliente (por ejemplo, HTML, JSON, texto, etc.).

---

## 🧠 Tipos de routing en Express

1. **Routing básico** (como el ejemplo anterior):

   * Define rutas directamente con `app.get()`, `app.post()`, etc.

2. **Routing modular** (más organizado):

   * Permite separar rutas en distintos archivos usando `express.Router()`.

   Ejemplo:

   ```js
   // archivo: routes/productos.js
   const express = require('express')
   const router = express.Router()

   router.get('/', (req, res) => res.send('Lista de productos'))
   router.get('/:id', (req, res) => res.send(`Producto ${req.params.id}`))

   module.exports = router
   ```

   Y luego en tu servidor principal:

   ```js
   const productosRouter = require('./routes/productos')
   app.use('/productos', productosRouter)
   ```

   Así, cualquier URL que comience con `/productos` se manejará en ese archivo.

---

## 🚦 Tipos de métodos de rutas

Express usa distintos métodos HTTP para definir rutas:

| Método   | Propósito                                            |
| -------- | ---------------------------------------------------- |
| `GET`    | Obtener información del servidor.                    |
| `POST`   | Enviar datos al servidor (por ejemplo, formularios). |
| `PUT`    | Actualizar datos existentes.                         |
| `DELETE` | Eliminar datos.                                      |
| `PATCH`  | Actualizar parcialmente un recurso.                  |

Ejemplo:

```js
app.post('/registro', (req, res) => {
  res.send('Usuario registrado')
})
```

---

## 🧭 En resumen

| Concepto                | Explicación                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------- |
| **Routing**             | Es el proceso de definir qué respuesta da tu aplicación según la URL y el método HTTP. |
| **Ruta (Route)**        | Es la combinación de un método HTTP (GET, POST...) y una URL específica.               |
| **Manejador (Handler)** | Es la función que se ejecuta cuando esa ruta es llamada.                               |

---