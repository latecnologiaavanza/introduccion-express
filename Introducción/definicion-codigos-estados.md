Los **códigos de estado HTTP** (o *HTTP Status Codes*) son **números** que el servidor envía al cliente (por ejemplo, a tu navegador) para **indicar el resultado de una solicitud (request)**.  

En otras palabras:  
> Son una forma en que el servidor **le comunica al cliente si la solicitud fue exitosa, produjo un error, o requiere una acción adicional.**

---

## 🧠 ¿Dónde se usan?

Cada vez que haces una petición HTTP (por ejemplo, al visitar una página web o hacer una solicitud con `fetch`, `axios`, etc.), el servidor responde con:

1. **Un encabezado HTTP (header)** que contiene el código de estado.  
2. **Un cuerpo (body)** que puede contener HTML, JSON, texto, etc.

Ejemplo en Express:

```js
res.status(404).send('Página no encontrada')
```

Aquí el servidor está diciendo al cliente:  
➡️ “El recurso que pediste no existe (404)”.

---

## ⚙️ Estructura general

Un código de estado HTTP tiene **tres dígitos** y se agrupa en **cinco categorías** según su primer número:

| Categoría | Rango | Significado general |
|------------|--------|---------------------|
| **1xx** | 100–199 | Informativos: la solicitud se está procesando. |
| **2xx** | 200–299 | Éxito: la solicitud fue recibida y procesada correctamente. |
| **3xx** | 300–399 | Redirecciones: el cliente debe realizar otra acción (como ir a otra URL). |
| **4xx** | 400–499 | Errores del cliente: la solicitud está mal hecha o no existe el recurso. |
| **5xx** | 500–599 | Errores del servidor: algo falló en el servidor al procesar la solicitud. |

---

## 📊 Ejemplos comunes

### 🟢 **Códigos 2xx – Éxito**
| Código | Nombre | Significado |
|--------|---------|-------------|
| **200 OK** | Todo salió bien. |
| **201 Created** | Un recurso fue creado (por ejemplo, al registrar un usuario). |
| **204 No Content** | La solicitud fue exitosa, pero no hay contenido que devolver. |

Ejemplo en Express:
```js
res.status(201).send('Usuario creado con éxito')
```

---

### 🟡 **Códigos 3xx – Redirección**
| Código | Nombre | Significado |
|--------|---------|-------------|
| **301 Moved Permanently** | El recurso se movió a otra URL de forma permanente. |
| **302 Found** | Redirección temporal. |
| **304 Not Modified** | El recurso no ha cambiado desde la última vez. |

Ejemplo:
```js
res.redirect('/nueva-pagina')
```
→ Esto envía un código **302** por defecto.

---

### 🔴 **Códigos 4xx – Errores del cliente**
| Código | Nombre | Significado |
|--------|---------|-------------|
| **400 Bad Request** | La solicitud está mal formada (datos incorrectos, JSON inválido, etc.). |
| **401 Unauthorized** | Falta autenticación o token. |
| **403 Forbidden** | El usuario no tiene permiso para acceder al recurso. |
| **404 Not Found** | No se encontró el recurso solicitado. |

Ejemplo:
```js
res.status(404).send('Página no encontrada')
```

---

### ⚫ **Códigos 5xx – Errores del servidor**
| Código | Nombre | Significado |
|--------|---------|-------------|
| **500 Internal Server Error** | Error general del servidor. |
| **502 Bad Gateway** | El servidor actuó como proxy y recibió una respuesta inválida. |
| **503 Service Unavailable** | El servidor no puede responder temporalmente (por mantenimiento o sobrecarga). |

Ejemplo:
```js
res.status(500).send('Error interno del servidor')
```

---

## 🧩 En resumen

| Grupo | Tipo | Ejemplo | Significado |
|--------|------|----------|-------------|
| 1xx | Informativo | 100 | Procesando... |
| 2xx | Éxito | 200 | Todo bien |
| 3xx | Redirección | 301 | Se movió |
| 4xx | Error del cliente | 404 | No encontrado |
| 5xx | Error del servidor | 500 | Fallo interno |

---

## 💡 Ejemplo práctico con Express

```js
app.get('/', (req, res) => {
    res.status(200).send('Bienvenido')
})

app.get('/usuario', (req, res) => {
    res.status(201).send('Usuario creado')
})

app.use((req, res) => {
    res.status(404).send('Página no encontrada')
})
```

---