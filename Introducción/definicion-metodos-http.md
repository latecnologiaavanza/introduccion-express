## 🧠 Primero: qué hace este código

```js
app.get('/', (req, res) => {
    res.send('Hello World')
})
```

👉 Esto define una **ruta específica** para el método **GET** y la URL raíz `/`.

- Si el usuario entra a `http://localhost:3000/`, el servidor responde `"Hello World"`.
- Si el usuario entra a cualquier otra ruta, **no** pasará nada (Express no tiene una ruta definida para eso y devolverá un error 404 automáticamente).

---

## 💡 Ahora, qué hace esto:

```js
app.use((req, res) => {
    res.send('No se encontró tu página')
})
```

Esto es una **ruta de uso general** o **middleware de captura global**.

---

## 🧩 Explicación detallada:

1. **`app.use()`** se usa para definir **middleware**, es decir, funciones que se ejecutan para **todas las rutas** (sin importar si es GET, POST, PUT, etc.).

2. Si el servidor **no encuentra ninguna ruta que coincida** antes, Express llega finalmente a esta función.

3. Entonces, esta línea:
   ```js
   res.send('No se encontró tu página')
   ```
   envía una respuesta personalizada al cliente cuando no se encuentra ninguna ruta definida.

📍 En otras palabras, **esta es tu página de error 404 personalizada.**

---

## 🧭 Ejemplo completo

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Si el usuario entra a cualquier otra ruta no definida:
app.use((req, res) => {
    res.status(404).send('No se encontró tu página')
})

app.listen(3000)
console.log('Servidor corriendo en el puerto 3000')
```

### 🔍 Qué ocurre:
- Si visitas 👉 `http://localhost:3000/`  
  → Muestra: `Hello World`
- Si visitas 👉 `http://localhost:3000/otra`  
  → Muestra: `No se encontró tu página`

---

## ⚙️ Por qué `app.use()` y no `app.get()`

| Método | Qué hace | Cuándo se usa |
|--------|------------|---------------|
| `app.get('/ruta', handler)` | Solo responde a peticiones GET con esa ruta exacta | Para rutas específicas |
| `app.use(handler)` | Se ejecuta para **todas las rutas** y **todos los métodos HTTP** si ninguna ruta anterior coincidió | Para middlewares o páginas 404 |

---

## 🧩 En resumen

| Código | Significado |
|--------|--------------|
| `app.get('/', ...)` | Define qué pasa cuando el usuario entra a la página principal (`/`) |
| `app.use((req, res) => {...})` | Se ejecuta si **ninguna ruta anterior coincidió** (ideal para mostrar un mensaje o página 404) |

---