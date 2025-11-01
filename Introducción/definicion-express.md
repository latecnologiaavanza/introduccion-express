## 🟨 ¿Qué es **Express.js**?

### 🔹 Definición técnica:

**Express.js** (o simplemente **Express**) es un **framework minimalista y flexible para Node.js** que permite **crear servidores web y APIs de manera sencilla y organizada**.

---

## 🧩 Explicado en palabras simples:

Piensa en **Node.js** como el **motor** de un auto: te permite moverte.
Pero programar todo con Node “puro” puede ser complicado (hay que manejar rutas, peticiones HTTP, cabeceras, errores, etc.).

Ahí entra **Express**, que actúa como el **chasis del auto**, dándote una **estructura clara** y herramientas ya listas para usar.

Con Express puedes:

* Crear un **servidor web** fácilmente.
* Definir **rutas** (`/login`, `/productos`, `/usuarios`).
* Manejar **peticiones y respuestas HTTP** (GET, POST, PUT, DELETE).
* Usar **middlewares** para procesar datos o verificar usuarios.
* Conectar tu aplicación con una **base de datos** (como MySQL o MongoDB).
* Crear **APIs RESTful**.

---

## 🧱 Características principales de Express:

| Característica                | Descripción                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| 🚀 **Sencillo y rápido**      | Facilita tareas comunes de Node.js, como manejar peticiones y respuestas.                    |
| 🧩 **Basado en middleware**   | Puedes agregar funciones intermedias que procesan datos antes de enviar la respuesta.        |
| 🔁 **Ruteo sencillo**         | Define rutas como `/users`, `/login`, etc., con solo unas líneas de código.                  |
| 🧠 **Compatible con Node.js** | Todo lo que funciona en Node, también funciona con Express.                                  |
| 🌍 **Ideal para APIs REST**   | Muy usado para crear APIs que se comunican con aplicaciones frontend (React, Angular, etc.). |

---

## 🧪 Ejemplo básico con Express:

```js
// Importamos el framework
const express = require('express');

// Creamos la aplicación
const app = express();

// Definimos una ruta GET
app.get('/', (req, res) => {
  res.send('Hola desde Express.js 🚀');
});

// Iniciamos el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

👉 Explicación:

1. `require('express')` → Importa el framework.
2. `express()` → Crea una aplicación de servidor.
3. `app.get('/', …)` → Define una ruta (por ejemplo, la página principal).
4. `app.listen(3000)` → Levanta el servidor en el puerto 3000.

---

## 🧠 ¿Por qué usar Express en lugar de Node “puro”?

Sin Express (solo Node), crear un servidor requiere mucho más código:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.write('Hola desde Node.js');
    res.end();
  }
});

server.listen(3000);
```

Con Express, ese mismo trabajo se reduce a:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hola desde Express'));
app.listen(3000);
```

📉 Menos código, más orden, más productividad.

---

## 🧭 En resumen:

| Concepto               | Descripción breve                           |
| ---------------------- | ------------------------------------------- |
| **Nombre completo:**   | Express.js                                  |
| **Tipo:**              | Framework web para Node.js                  |
| **Lenguaje:**          | JavaScript                                  |
| **Función:**           | Facilitar la creación de servidores y APIs  |
| **Ventaja principal:** | Simplifica y organiza el código del backend |
| **Usos comunes:**      | Servidores web, APIs REST, microservicios   |

---
