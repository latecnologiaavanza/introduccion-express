# 🚀 ¿Qué es Express Router?

**Express Router** es un **módulo interno de Express** que sirve para **organizar y modularizar rutas** en tu aplicación.

En vez de escribir todas las rutas en `server.js` o `index.js`, puedes dividirlas en archivos más pequeños y claros usando un **router**, que es como un *mini-servidor Express* especializado solo en manejar rutas.

---

# 🤓 ¿Para qué sirve?

Sirve para:

✔ Separar las rutas por módulos (usuarios, productos, auth, etc.)
✔ Mantener el código limpio y organizado
✔ Reutilizar middlewares en grupos de rutas
✔ Facilitar el mantenimiento del proyecto
✔ Escalar tu API sin que se vuelva un archivo gigante

---

# ⚙️ ¿Cómo funciona Express Router?

Express Router funciona creando **instancias de enrutadores**, sobre las cuales puedes definir rutas, y luego montarlas dentro de la aplicación principal.

---

## 🧩 1. Creas un router

```js
const express = require("express");
const router = express.Router();
```

---

## 🧩 2. Definir rutas dentro del router

```js
router.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

router.post("/productos", (req, res) => {
  res.send("Producto creado");
});
```

---

## 🧩 3. Exportar el router

```js
module.exports = router;
```

---

## 🧩 4. Importarlo y usarlo en `server.js`

```js
const express = require("express");
const app = express();

const productoRoutes = require("./routes/producto.routes");

app.use("/api", productoRoutes);

app.listen(3000, () => console.log("Server on port 3000"));
```

---

### 🔎 ¿Qué significa `app.use("/api", productoRoutes)`?

Significa que todas las rutas del archivo se "montan" bajo `/api`.

Si en el router tenías:

```js
router.get("/productos");
```

Entonces la URL real será:

```
http://localhost:3000/api/productos
```

---

# 🛠 Ejemplo real completo

## 📁 Estructura de carpetas

```
/project
  server.js
  /routes
    producto.routes.js
```

---

### 📄 producto.routes.js

```js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Obtener productos");
});

router.post("/", (req, res) => {
  res.send("Crear producto");
});

module.exports = router;
```

---

### 📄 server.js

```js
const express = require("express");
const app = express();

const productoRoutes = require("./routes/producto.routes");

app.use("/productos", productoRoutes);

app.listen(3000, () => console.log("Servidor en puerto 3000"));
```

---

### Resultado:

* GET → `/productos` → "Obtener productos"
* POST → `/productos` → "Crear producto"

---

# 🎯 ¿Cuándo usar Express Router?

Úsalo siempre que tu proyecto tenga más de 5 rutas.
Especialmente útil para módulos como:

* `/usuarios`
* `/auth`
* `/productos`
* `/ventas`
* `/categorias`

---

# 📌 Resumen final

**Express Router** es un sistema que te permite:

* Separar rutas por archivos
* Crear módulos reutilizables
* Añadir middleware por grupo de rutas
* Mejorar la organización y escalabilidad

---