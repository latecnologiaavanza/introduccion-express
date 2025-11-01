## 🧩 ¿Qué es **npm**?

### 🔹 Definición

**npm** significa **Node Package Manager** (Administrador de Paquetes de Node).

Es la **herramienta oficial de Node.js** que se utiliza para:

1. **Instalar paquetes (librerías o módulos)** creados por otros desarrolladores.
2. **Administrar dependencias** de tu proyecto.
3. **Ejecutar scripts** definidos en tu aplicación (como “start”, “test”, “build”, etc.).

👉 En resumen:

> **npm** es el sistema que permite **añadir, actualizar y gestionar** librerías dentro de un proyecto Node.js o JavaScript.

---

## ⚙️ ¿Qué es un “paquete” en npm?

Un **paquete** (o *package*) es simplemente un **conjunto de código reutilizable** (por ejemplo, una librería o framework).
Cada paquete se puede instalar fácilmente con npm.

Ejemplo de paquetes famosos:

* `express` → framework para crear servidores web.
* `mongoose` → para conectar Node.js con MongoDB.
* `react` → para desarrollar interfaces de usuario.
* `nodemon` → reinicia el servidor automáticamente al detectar cambios.

---

## 📦 ¿Dónde se guarda todo?

Cuando instalas paquetes, npm crea una carpeta llamada:

```
node_modules/
```

Ahí se guardan **todas las dependencias** de tu proyecto.

Además, npm utiliza un archivo llamado:

### `package.json`

Este archivo contiene la información de tu proyecto, incluyendo:

* Nombre, versión y descripción.
* Scripts (por ejemplo, cómo iniciar el servidor).
* Dependencias instaladas.

**Ejemplo de un `package.json`:**

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## 🧰 Comandos básicos de npm

### 🪄 1. Inicializar un proyecto

```bash
npm init
```

Crea el archivo `package.json` de forma interactiva (te hace preguntas).
Si quieres hacerlo rápido:

```bash
npm init -y
```

Crea el `package.json` automáticamente con valores por defecto.

---

### 📥 2. Instalar un paquete

```bash
npm install express
```

O más corto:

```bash
npm i express
```

Esto:

* Descarga `express` desde el registro oficial de npm.
* Lo agrega a la carpeta `node_modules`.
* Añade la dependencia al `package.json`.

---

### 📤 3. Instalar dependencias globalmente

```bash
npm install -g nodemon
```

El flag `-g` significa “global”.
Se instala para poder usarlo en cualquier proyecto o terminal.

---

### 🔄 4. Actualizar un paquete

```bash
npm update express
```

---

### ❌ 5. Desinstalar un paquete

```bash
npm uninstall express
```

---

### 🚀 6. Ejecutar scripts

En el `package.json` puedes definir scripts como:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Para ejecutarlos:

```bash
npm start
```

o

```bash
npm run dev
```

---

## 🌍 ¿De dónde vienen los paquetes?

Todos los paquetes están en el **registro público de npm**, disponible en:
🔗 [https://www.npmjs.com](https://www.npmjs.com)

Ahí puedes buscar y descargar librerías, ver su documentación, versiones, dependencias, etc.

---

## 💡 Ejemplo completo

Supongamos que quieres crear un servidor web simple:

1️⃣ Inicializas un proyecto:

```bash
npm init -y
```

2️⃣ Instalas Express:

```bash
npm install express
```

3️⃣ Creas un archivo `index.js`:

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hola desde Node.js y npm'));

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
```

4️⃣ Lo ejecutas:

```bash
node index.js
```

✅ Tu servidor está funcionando gracias a **Express**, que instalaste con **npm**.

---

## 🧠 En resumen

| Concepto                  | Descripción                                                 |
| ------------------------- | ----------------------------------------------------------- |
| 🧩 **npm**                | Node Package Manager (Administrador de Paquetes de Node.js) |
| 🗂️ **Función principal** | Instalar, actualizar y administrar librerías (dependencias) |
| 📦 **Paquete**            | Código reutilizable (por ejemplo, Express, React, etc.)     |
| 🧾 **Archivo principal**  | `package.json`                                              |
| 🏗️ **Uso típico**        | `npm install <paquete>`                                     |
| 🌐 **Registro oficial**   | [https://www.npmjs.com](https://www.npmjs.com)              |

---