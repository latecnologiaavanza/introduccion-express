## 🧠 ¿Qué es `app.use()`?

`app.use()` es una **función de Express** que sirve para **registrar middlewares** o **rutas base** dentro de tu aplicación.

👉 En palabras simples:

> `app.use()` le dice a Express:
> “Cada vez que llegue una petición (sin importar el método o la ruta específica), ejecuta esta función o este módulo antes de continuar.”

---

## 🧩 Primero: ¿Qué es un *middleware*?

Un **middleware** (en español: *software intermedio*) es una **función** que:

* Se ejecuta **antes de llegar a una ruta final** (`app.get`, `app.post`, etc.).
* Puede **modificar la solicitud (`req`)**, la **respuesta (`res`)**, o **decidir si pasa al siguiente paso** con `next()`.

🧠 En Express, todo lo que pasa entre que el cliente hace la petición y el servidor responde puede ser un *middleware*.

---

## ⚙️ Ejemplo básico

```js
const express = require('express')
const app = express()

// Middleware global
app.use((req, res, next) => {
  console.log('Se hizo una petición al servidor')
  next() // <- Permite que la app siga a la siguiente ruta
})

app.get('/', (req, res) => {
  res.send('Página principal')
})

app.listen(3000)
console.log('Servidor en puerto 3000')
```

### 🔍 Qué ocurre aquí:

1. Cuando visitas `http://localhost:3000/`, Express ejecuta el middleware.
2. Muestra en consola:

   ```
   Se hizo una petición al servidor
   ```
3. Luego continúa a la ruta `/` y responde “Página principal”.

---

## 🚦 Explicado paso a paso

### `app.use()`

* Se aplica **a todas las rutas** y **todos los métodos HTTP** (GET, POST, PUT, DELETE, etc.).
* Acepta una **función middleware** o **una ruta base**.

---

## 🧭 Dos formas de usar `app.use()`

### 1️⃣ Middleware global (para toda la app)

Afecta todas las rutas:

```js
app.use((req, res, next) => {
  console.log('Petición recibida:', req.method, req.url)
  next()
})
```

---

### 2️⃣ Middleware con ruta base

Solo se ejecuta si la URL empieza con esa ruta:

```js
app.use('/api', (req, res, next) => {
  console.log('Entraste a la ruta /api')
  next()
})
```

Si visitas:

* `/api/usuarios` → se ejecuta el middleware
* `/contacto` → no se ejecuta

---

## 🧰 Ejemplo práctico con `express.text()`

```js
app.use(express.text())
```

Esto **no es un middleware tuyo**, sino uno **integrado en Express**.

👉 Lo que hace:

* Lee el **cuerpo (body)** de las solicitudes HTTP.
* Si el contenido es texto (`Content-Type: text/plain`), lo guarda en `req.body`.

Sin `app.use(express.text())`, `req.body` estaría vacío.

---

## 🚫 Ejemplo de uso para manejar errores o 404

```js
app.use((req, res) => {
  res.status(404).send('Página no encontrada')
})
```

📌 Aquí, `app.use()` se coloca **al final** del archivo.
Se ejecutará **solo si ninguna ruta anterior coincidió** → ideal para manejar errores 404.

---

## 🧩 En resumen

| Concepto        | Explicación                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| **`app.use()`** | Registra un middleware o una ruta base                                          |
| **Middleware**  | Función que se ejecuta antes de las rutas finales                               |
| **`next()`**    | Permite que Express siga al siguiente middleware o ruta                         |
| **Uso común**   | `app.use(express.json())`, `app.use(express.text())`, `app.use((req,res)=>...)` |

---

## 💡 Ejemplo completo

```js
const express = require('express')
const app = express()

// Middleware que se ejecuta para toda petición
app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`)
  next()
})

// Middleware de parsing de texto
app.use(express.text())

// Ruta POST
app.post('/mensaje', (req, res) => {
  console.log('Body:', req.body)
  res.send('Mensaje recibido')
})

// Si ninguna ruta coincide
app.use((req, res) => {
  res.status(404).send('No se encontró tu página')
})

app.listen(3000)
console.log('Servidor en puerto 3000')
```

---