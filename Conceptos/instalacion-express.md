## 🟩 1. **Requisitos previos**
Antes de instalar Express, asegúrate de tener instalado:

- **Node.js** ✅  
  (Incluye el gestor de paquetes **npm**)

📦 Para verificar si ya los tienes:
```bash
node -v
npm -v
```
Si ves algo como `v20.10.0` y `10.2.3`, ya estás listo.  
Si no los tienes, descarga Node.js desde:  
👉 [https://nodejs.org/](https://nodejs.org/)

---

## 🟨 2. **Crea una carpeta para tu proyecto**

Abre tu terminal y crea una carpeta nueva (por ejemplo, *mi-servidor*):
```bash
mkdir mi-servidor
cd mi-servidor
```

---

## 🟦 3. **Inicializa el proyecto Node.js**

Ejecuta:
```bash
npm init -y
```

Esto crea un archivo llamado **`package.json`**, donde se guardará la información de tu proyecto y sus dependencias (como Express).

---

## 🟧 4. **Instala Express**

Ejecuta el siguiente comando dentro de tu carpeta:
```bash
npm install express
```

📦 Esto descargará Express y lo agregará a tu proyecto en:
- `node_modules/` (carpeta con el código instalado)
- `package.json` (registro de dependencias)
- `package-lock.json` (detalle de versiones exactas)

---

## 🟫 5. **Verifica la instalación**

Puedes revisar en el archivo **`package.json`** que Express aparece en las dependencias:
```json
"dependencies": {
  "express": "^4.19.2"
}
```

(O una versión similar)

---

## 🟪 6. **Crea tu primer servidor con Express**

Crea un archivo llamado `app.js`:
```bash
touch app.js
```

Y escribe este código dentro:
```js
const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola desde Express.js 🚀!');
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

---

## 🟫 7. **Ejecuta tu servidor**

En la terminal, ejecuta:
```bash
node app.js
```

Si todo está correcto, deberías ver:
```
Servidor corriendo en http://localhost:3000
```

Ahora abre tu navegador y entra a:  
👉 **http://localhost:3000**

Y verás el mensaje:  
> ¡Hola desde Express.js 🚀!

---

## 🧠 En resumen:

| Paso | Comando | Descripción |
|------|----------|-------------|
| 1 | `node -v` / `npm -v` | Verificar instalación de Node y npm |
| 2 | `mkdir mi-servidor && cd mi-servidor` | Crear carpeta del proyecto |
| 3 | `npm init -y` | Inicializar proyecto Node |
| 4 | `npm install express` | Instalar Express |
| 5 | `node app.js` | Ejecutar servidor Express |

---