# Guía completa — Crear un proyecto Express paso a paso (con explicación de cada comando)

Voy a darte un flujo práctico desde cero, con los comandos que debes ejecutar y **qué hace cada uno**. Después explico `npm i nodemon -D`, qué es `package.json`, y desgloso el `package.json` que pegaste y qué hace `npm run dev`.

---

## 1) Crear carpeta del proyecto y arrancar npm

```bash
mkdir express-restapi-crud    # crea la carpeta del proyecto
cd express-restapi-crud       # entra en la carpeta del proyecto
npm init -y                   # crea package.json con valores por defecto (-y responde "sí" a todo)
```

**Qué hace cada cosa**

* `mkdir <nombre>`: crea una carpeta en el sistema.
* `cd <carpeta>`: cambia el directorio actual.
* `npm init -y`: crea un `package.json` inicial con valores por defecto. Si quieres personalizar nombre/versión/author usa `npm init` sin `-y`.

---

## 2) Instalar dependencias (runtime) y devDependencies (herramientas de desarrollo)

```bash
npm i express morgan
npm i nodemon -D
```

**Qué hace cada comando**

* `npm i` es abreviatura de `npm install`.
* `npm i express morgan` instala **dependencias** necesarias para que la app funcione en producción y las añade a `dependencies` en `package.json`.

  * `express`: framework web.
  * `morgan`: middleware de logging (registra las peticiones HTTP).
* `npm i nodemon -D` instala **nodemon** como **dev dependency** y lo añade a `devDependencies`.

  * `-D` es la abreviatura de `--save-dev`. Guarda el paquete en `devDependencies` (uso solo en desarrollo).
  * `nodemon` reinicia automáticamente el servidor cuando detecta cambios en archivos — útil en desarrollo, no es necesario en producción.

**Nota**: Podrías también hacer `npm install --save-dev nodemon` (idéntico a `-D`).

---

## 3) Crear archivo principal (server.js o index.js)

Crea `server.js` y pega este ejemplo mínimo (Express 5 compatible):

```js
// server.js
import express from "express"; // si usas type: "module" en package.json
// ó const express = require('express');  // si usas CommonJS

import morgan from "morgan"; // o const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(morgan("dev"));
app.use(express.json()); // para parsear JSON en requests

// rutas de ejemplo
app.get("/", (req, res) => {
  res.json({ message: "API corriendo" });
});

// ejemplo CRUD (solo rutas de ejemplo)
app.get("/items", (req, res) => res.json({ items: [] }));
app.post("/items", (req, res) => res.status(201).json({ item: req.body }));

app.listen(PORT, () => {
  console.log(`Server escuchando en http://localhost:${PORT}`);
});
```

**Si usas módulos ES (import)**: añade `"type": "module"` en `package.json` o usa la sintaxis CommonJS (`require`).

---

## 4) Scripts útiles en package.json y cómo ejecutar

En `package.json` puedes definir scripts. Ejemplos:

```json
"scripts": {
  "dev": "nodemon server.js",
  "start": "node server.js",
  "test": "echo \"No tests\" && exit 0"
}
```

* `npm run dev` → ejecuta `nodemon server.js`. Ideal para desarrollo (auto-restart).
* `npm start` → ejecuta `node server.js`. En muchos entornos de producción (o Heroku) se llama `npm start`.
* `npm run <script>` ejecuta el script con el nombre dado. `start` se puede invocar solo con `npm start` (sin `run`), pero el resto requiere `npm run`.

---

## 5) Explicación: `npm i nodemon -D`

* `npm`: gestor de paquetes de Node.js.
* `i` = `install`.
* `nodemon`: paquete que observa cambios en archivos y reinicia la app automáticamente.
* `-D` = `--save-dev`: guarda como **devDependency** en `package.json`.
  **Por qué usarlo así**: nodemon sólo se necesita durante desarrollo, no en producción. Colocándolo en `devDependencies` evitas instalarlo en entornos donde solo se instalan dependencias de producción (`npm install --production`).

---

## 6) ¿Qué es el `package.json`?

`package.json` es el archivo de metadata del proyecto Node.js. Contiene:

* `name`, `version`: identificadores del paquete/proyecto.
* `description`, `author`, `license`, `keywords`: metadatos.
* `main`: punto de entrada por defecto del paquete (archivo que exporta la librería o que se considera el entry).
* `scripts`: comandos personalizados ejecutables con `npm run`.
* `dependencies`: paquetes necesarios en tiempo de ejecución.
* `devDependencies`: paquetes necesarios solo para desarrollo.
* `engines` (opcional): versiones de Node requeridas.
* `type` (opcional): `"module"` permite usar `import` en lugar de `require`.

`package.json` permite reproducir el entorno (junto con `package-lock.json`) y compartir el proyecto.

---

## 7) Desglose del `package.json` que pegaste

```json
{
  "name": "express-restapi-crud",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.1.0",
    "morgan": "^1.10.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```

* `"name": "express-restapi-crud"`: nombre del proyecto. Debe ser único si publicas en npm.
* `"version": "1.0.0"`: versión semántica (semver): MAJOR.MINOR.PATCH.
* `"main": "index.js"`: archivo principal cuando este paquete se importa desde otro proyecto. Si tu archivo de arranque se llama `server.js`, podrías poner `"main": "server.js"`.
* `"scripts": { "dev": "nodemon server.js" }`: define un script llamado `dev`. Al correr `npm run dev` se ejecuta `nodemon server.js`.
* `"keywords": []`: palabras clave útiles si publicas el paquete.
* `"author": ""`: autor del proyecto.
* `"license": "ISC"`: licencia por defecto.
* `"description": ""`: descripción del proyecto.
* `"dependencies"`: aquí están `express` y `morgan`.

  * La versión `^5.1.0` indica que npm puede instalar la versión más reciente compatible que no cambie el **major** (acepta actualizaciones del minor/patch).
* `"devDependencies"`: `nodemon` está aquí con su versión `^3.1.10`.

---

## 8) ¿Qué hace exactamente `npm run dev`?

* Busca dentro de `package.json` la propiedad `scripts.dev`.
* Ejecuta el comando asociado: `nodemon server.js`.
* `nodemon` arranca `server.js` y **observa** cambios en archivos `.js` (o los que configures). Al detectar cambios reinicia automáticamente el proceso.
* Resultado: editas código, guardas, y el servidor se reinicia sin que tengas que detenerlo y volver a iniciar manualmente.

---

## 9) Buenas prácticas y extras útiles

* Añade `.gitignore` con:

  ```
  node_modules/
  .env
  ```
* Usa `npm i --save` (o `npm i`) para dependencias de producción, y `npm i -D` para herramientas de dev.
* Para variables sensibles (DB, claves) usa `.env` y `dotenv` (no lo subas a repo).
* Para producción: `npm start` debería ejecutar `node server.js`. No uses nodemon en producción.
* Si vas a publicar o reutilizar el paquete, completa `name`, `author`, `description`, `license`, `keywords`.
* Mantén `package-lock.json` en el repo para reproducibilidad.

---

## 10) Estructura de proyecto sugerida

```
express-restapi-crud/
├─ node_modules/
├─ src/
│  ├─ controllers/
│  ├─ routes/
│  ├─ models/
│  └─ server.js
├─ .gitignore
├─ package.json
└─ package-lock.json
```

(O puedes dejar `server.js` en raíz si prefieres)

---

## 11) Comandos resumen (rápido)

```bash
mkdir mi-proy && cd mi-proy
npm init -y
npm i express morgan
npm i -D nodemon
# crear server.js
# editar package.json -> scripts.dev = "nodemon server.js"
npm run dev      # desarrollo con nodemon
npm start        # arranca con node (producción)
```

---