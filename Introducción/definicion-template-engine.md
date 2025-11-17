# 🚀 ¿Qué es un Template Engine?

Un **Template Engine** (motor de plantillas) es una herramienta que te permite **generar HTML dinámico** desde el servidor usando una plantilla que contiene:

* **HTML**
* **Variables**
* **Estructuras de control** (if, for, etc.)
* **Expresiones**

En lugar de escribir HTML estático, un template engine te permite escribir un archivo con “espacios” que se llenan con datos antes de enviarlo al navegador.

---

# 🎯 ¿Para qué sirve?

Sirve para:

✔ Generar contenido HTML dinámico
✔ Separar la lógica del HTML
✔ Evitar concatenar strings
✔ Organizar mejor un proyecto web
✔ Renderizar páginas completas con datos del backend

---

# 🧠 Ejemplo rápido para entenderlo

Sin template engine:

```js
res.send("<h1>Hola " + usuario.nombre + "</h1>");
```

Con template engine:

```html
<h1>Hola {{ nombre }}</h1>
```

En el código del servidor:

```js
res.render("home", { nombre: "Christian" });
```

Resultado final en el navegador:

```
Hola Christian
```

---

# ⚙️ ¿Cómo funciona un Template Engine?

Funciona en 3 pasos:

---

## 1️⃣ **Creas una plantilla** (HTML + variables)

Ejemplo con EJS (`views/home.ejs`):

```html
<h1>Hola <%= nombre %></h1>
```

---

## 2️⃣ **Express combina la plantilla con datos**

```js
app.get("/", (req, res) => {
  res.render("home", { nombre: "Christian" });
});
```

---

## 3️⃣ **Se genera HTML final**

El motor de plantillas reemplaza:

* `<%= nombre %>` → `"Christian"`

Y entrega HTML listo al navegador:

```html
<h1>Hola Christian</h1>
```

---

# 🧩 Tipos de Template Engines más usados

| Motor          | Extensión   | Características                               |
| -------------- | ----------- | --------------------------------------------- |
| **EJS**        | `.ejs`      | Sintaxis simple, estilo JS                    |
| **Pug**        | `.pug`      | Sintaxis corta, basada en indentación         |
| **Handlebars** | `.hbs`      | Sintaxis de llaves `{{ }}` y muy estructurado |
| **Mustache**   | `.mustache` | Muy simple, sin lógica compleja               |

---

# 🏗️ ¿Cómo se usa en un proyecto Express?

Ejemplo con **EJS**:

---

## 1️⃣ Instalar

```bash
npm install ejs
```

---

## 2️⃣ Configurar en Express

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
```

---

## 3️⃣ Crear una plantilla `views/home.ejs`

```html
<h1>Hola <%= nombre %></h1>
<p>Bienvenido a mi sitio web.</p>
```

---

## 4️⃣ Renderizar en una ruta

```js
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Christian"
  });
});
```

---

## 5️⃣ Resultado en el navegador

```
http://localhost:3000
```

El motor de plantillas convierte la plantilla + datos en:

```html
<h1>Hola Christian</h1>
<p>Bienvenido a mi sitio web.</p>
```

---

# 📌 ¿Por qué usar un Template Engine?

* Para páginas renderizadas desde el servidor (**SSR**).
* Para sitios donde el backend controla la vista.
* Para proyectos sin React/Vue/Angular (donde las vistas se generan en el cliente).

---

# 🔥 ¿Cuándo NO usar un Template Engine?

Cuando usas:

* React
* Vue
* Angular
* Next.js

En estos casos, la renderización es del lado del cliente o híbrida.

---

# 🎯 Resumen final

Un **Template Engine**:

* Es un motor que genera HTML dinámico.
* Permite usar variables, estructuras de control y plantillas.
* Se integra fácilmente con Express.
* Mejora la organización del HTML.
* Convierte plantillas en HTML final antes de enviarlo al navegador.

---