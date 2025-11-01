## 🟩 1. ¿Qué es **Node.js**?

### 🔹 Definición:

**Node.js** es un **entorno de ejecución de JavaScript del lado del servidor**.
Esto significa que permite ejecutar código JavaScript **fuera del navegador**, generalmente en un **servidor**.

### 🔹 Explicado más simple:

Antes de Node.js, JavaScript solo se usaba en el **navegador web** (por ejemplo, para hacer que una página fuera interactiva).
Con Node.js, ahora puedes usar JavaScript también en el **backend**, para:

* Crear servidores web
* Conectarte a bases de datos
* Procesar archivos
* Realizar peticiones HTTP
* Y mucho más.

### 🔹 Características principales:

* Usa el **motor V8 de Google Chrome** (el que ejecuta JavaScript en el navegador).
* Es **asíncrono** y usa un **modelo de I/O no bloqueante**, lo que lo hace **rápido y eficiente**.
* Permite manejar **muchas conexiones simultáneamente** con pocos recursos.

### 🔹 Ejemplo simple en Node.js:

```js
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hola desde Node.js');
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

Aquí **no usamos ningún framework**, solo el módulo nativo `http` de Node.js.

---

## 🟨 2. ¿Qué es **Express.js**?

### 🔹 Definición:

**Express.js** es un **framework para Node.js** diseñado para **simplificar la creación de servidores web y APIs**.

### 🔹 En palabras simples:

Node.js te da las herramientas básicas (por ejemplo, cómo crear un servidor y escuchar peticiones).
**Express** se construye sobre Node.js para que **no tengas que hacer todo manualmente**.

Con Express puedes:

* Definir **rutas** fácilmente (`/login`, `/users`, etc.)
* Manejar **peticiones y respuestas HTTP** de forma más limpia
* Usar **middlewares** (funciones que procesan las peticiones antes de responder)
* Crear **APIs REST** de manera ordenada.

### 🔹 Ejemplo en Express:

```js
// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde Express.js');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

👉 Este ejemplo hace lo mismo que el anterior, pero con **mucho menos código** y una **estructura más clara**.

---

## 🟦 3. Diferencias entre **Node.js** y **Express.js**

| Característica             | Node.js                                        | Express.js                                   |
| -------------------------- | ---------------------------------------------- | -------------------------------------------- |
| Tipo                       | Entorno de ejecución                           | Framework basado en Node.js                  |
| Nivel                      | Bajo nivel                                     | Alto nivel                                   |
| Función principal          | Ejecutar código JavaScript fuera del navegador | Simplificar la creación de servidores y APIs |
| Necesidad de configuración | Mucha (todo se programa a mano)                | Menos (ya tiene funciones preparadas)        |
| Ejemplo de uso             | Crear un servidor básico HTTP                  | Crear una API REST con rutas y middlewares   |

🧠 En resumen:

> **Node.js** es la base (el motor).
> **Express.js** es una herramienta que se apoya en Node.js para hacerte la vida más fácil al desarrollar servidores.

---

## 🟧 4. ¿Qué es un **framework**?

### 🔹 Definición general:

Un **framework** (marco de trabajo) es un **conjunto de herramientas, librerías y reglas predefinidas** que ayudan a **desarrollar software más rápido y organizado**.

### 🔹 Diferencia con una librería:

* Una **librería** es un conjunto de funciones que tú llamas cuando las necesitas.
* Un **framework** define **la estructura de tu aplicación** y **te dice cómo debes organizar tu código**.

👉 Ejemplo:

* **Librería:** jQuery, lodash (tú las usas cuando quieres).
* **Framework:** Express, Angular, Spring Boot (tú trabajas *dentro de su estructura*).

### 🔹 Ventajas de usar un framework:

* Ahorra tiempo
* Aporta una estructura clara al proyecto
* Mejora la mantenibilidad del código
* Suele tener una gran comunidad y soporte

---

## 🧭 En resumen:

| Concepto       | Qué es                                                            | Nivel   | Ejemplo de uso                            |
| -------------- | ----------------------------------------------------------------- | ------- | ----------------------------------------- |
| **Node.js**    | Entorno de ejecución de JavaScript del lado del servidor          | Base    | Ejecutar un servidor o scripts en backend |
| **Express.js** | Framework web basado en Node.js                                   | Alto    | Crear APIs o aplicaciones web más rápido  |
| **Framework**  | Conjunto de herramientas y reglas para desarrollar más fácilmente | General | Angular, Spring Boot, Express, Django     |

---