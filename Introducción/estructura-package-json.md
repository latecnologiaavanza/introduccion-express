# 🧩 ¿Qué es `package.json`?

El archivo `package.json` es **el corazón de cualquier proyecto Node.js**.
Guarda toda la **información y configuración** del proyecto, incluyendo:

* Metadatos (nombre, versión, autor, licencia…)
* Dependencias necesarias para ejecutar el proyecto.
* Scripts personalizados (como `npm run dev`).
* Configuraciones internas de Node o NPM.

El objetivo es que **otro desarrollador pueda clonar el proyecto, ejecutar `npm install`, y tener exactamente el mismo entorno** que tú.

---

# 🧱 Desglose completo del contenido

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

Vamos línea por línea 👇

---

### 🏷️ `"name": "express-restapi-crud"`

* Es el **nombre del proyecto o paquete**.
* Si publicas este paquete en **npm**, este será su identificador.
* Reglas:

  * Debe estar en minúsculas.
  * Sin espacios (usa guiones `-` o guion bajo `_`).
  * Debe ser único si se publica en npm.

> 💡 Ejemplo: `"name": "mi-api-node"` o `"name": "backend-tienda-online"`

---

### 🧮 `"version": "1.0.0"`

* Define la **versión del proyecto**.
* Sigue el estándar **semver** (Semantic Versioning):
  `MAJOR.MINOR.PATCH`

  | Parte | Ejemplo | Cuándo se cambia                                                 |
  | :---- | :------ | :--------------------------------------------------------------- |
  | MAJOR | 1.x.x   | Cuando hay cambios **incompatibles**                             |
  | MINOR | x.1.x   | Cuando agregas **nuevas funcionalidades** sin romper lo anterior |
  | PATCH | x.x.1   | Cuando haces **correcciones o mejoras pequeñas**                 |

> 💡 Ejemplo: si corriges un bug → `1.0.1`.
> Si agregas una nueva API → `1.1.0`.
> Si cambias toda la estructura → `2.0.0`.

---

### 🧭 `"main": "index.js"`

* Es el **punto de entrada principal** del proyecto.
  Node usa este archivo cuando alguien hace:

  ```js
  const app = require('express-restapi-crud');
  ```
* En aplicaciones (no librerías) este valor no afecta demasiado.
  Pero en librerías sí: indica cuál archivo se ejecuta o exporta.

> 💡 En tu caso podrías cambiarlo a `"main": "server.js"` si ese es el archivo principal de tu app.

---

### ⚙️ `"scripts": { "dev": "nodemon server.js" }`

* La propiedad `scripts` define **comandos personalizados** que puedes ejecutar con `npm run`.

Aquí:

```json
"dev": "nodemon server.js"
```

* Define un script llamado **dev**.
* Cuando ejecutas `npm run dev`, NPM corre el comando `nodemon server.js`.
* `nodemon` reinicia el servidor automáticamente cuando detecta cambios.

Otros ejemplos:

```json
"scripts": {
  "start": "node server.js",        // para producción
  "dev": "nodemon server.js",       // para desarrollo
  "test": "echo 'No tests yet'"     // script vacío
}
```

---

### 🧩 `"keywords": []`

* Lista de **palabras clave** que describen tu proyecto (útil solo si lo publicas en npm).
* Sirve para ayudar a que otras personas encuentren tu paquete.

Ejemplo:

```json
"keywords": ["express", "api", "crud", "rest"]
```

---

### 👨‍💻 `"author": ""`

* Aquí colocas tu nombre o el nombre del equipo o empresa.
* También puede incluir correo o URL.

Ejemplo:

```json
"author": "Christian Ramirez <christian@latecnologiaavanza.com>"
```

---

### 🧾 `"license": "ISC"`

* Define la **licencia del proyecto** (cómo puede usarse tu código).
* `"ISC"` es una licencia permisiva (similar a MIT), que permite usar, modificar y distribuir el código con pocas restricciones.

Ejemplo de licencias comunes:

* `"MIT"` → muy usada, libre y abierta.
* `"GPL-3.0"` → licencia libre pero más restrictiva.
* `"UNLICENSED"` → indica que no quieres que se distribuya.

---

### 📝 `"description": ""`

* Breve descripción del proyecto.
  Es útil para saber rápidamente qué hace tu app.

Ejemplo:

```json
"description": "API REST CRUD creada con Express y Node.js"
```

---

### 📦 `"dependencies": { ... }`

* Aquí se listan las **dependencias que tu aplicación necesita para funcionar** en **producción**.

```json
"dependencies": {
  "express": "^5.1.0",
  "morgan": "^1.10.1"
}
```

📘 Explicación:

* `express`: framework web.
* `morgan`: middleware para registrar las peticiones HTTP.
* El símbolo `^` delante del número significa que npm instalará la versión **más reciente compatible** con la versión mayor (en este caso, cualquier versión `5.x.x` para Express).

Ejemplo:

* `"express": "^5.1.0"` → permite versiones `>=5.1.0` y `<6.0.0`.

---

### 🧰 `"devDependencies": { ... }`

* Contiene las **dependencias necesarias solo durante el desarrollo**, no en producción.

```json
"devDependencies": {
  "nodemon": "^3.1.10"
}
```

📘 Explicación:

* `nodemon` sirve solo mientras desarrollas, para reiniciar el servidor automáticamente.
* En un entorno de producción (por ejemplo, un servidor real), **no necesitas** `nodemon`, solo `node`.

---

# ⚖️ Diferencia entre `dependencies` y `devDependencies`

| Concepto         | `dependencies`                         | `devDependencies`                                             |
| ---------------- | -------------------------------------- | ------------------------------------------------------------- |
| Cuándo se usan   | En **producción** y **desarrollo**     | Solo en **desarrollo**                                        |
| Ejemplos típicos | `express`, `mongoose`, `cors`, `axios` | `nodemon`, `eslint`, `jest`, `typescript`                     |
| Instalación      | `npm install express`                  | `npm install nodemon -D` o `--save-dev`                       |
| Se instalan con  | `npm install`                          | `npm install` (sí, pero puedes excluirlas con `--production`) |
| En producción    | Sí se instalan                         | No se instalan si usas `npm install --production`             |

💡 **Ejemplo práctico:**

* Tu servidor Express no puede funcionar sin `express`, así que es una `dependency`.
* Pero tu servidor **sí puede funcionar sin `nodemon`** (porque solo lo usas mientras desarrollas).
  Por eso `nodemon` es una `devDependency`.

---

# 🧠 En resumen

| Propiedad           | Qué hace                                      |
| ------------------- | --------------------------------------------- |
| **name**            | Nombre del proyecto                           |
| **version**         | Versión del proyecto (semver)                 |
| **main**            | Archivo principal de entrada                  |
| **scripts**         | Comandos ejecutables con `npm run`            |
| **keywords**        | Palabras clave descriptivas                   |
| **author**          | Autor o equipo del proyecto                   |
| **license**         | Tipo de licencia                              |
| **description**     | Descripción breve                             |
| **dependencies**    | Paquetes necesarios para ejecutar el proyecto |
| **devDependencies** | Paquetes necesarios solo en desarrollo        |

---