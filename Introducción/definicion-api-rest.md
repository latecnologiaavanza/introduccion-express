# 🧩 1️⃣ ¿Qué es una API?

## 📘 Definición

**API** significa **Application Programming Interface**
(en español: *Interfaz de Programación de Aplicaciones*).

Una **API** es un **conjunto de reglas, funciones y protocolos** que permite que **dos sistemas o programas se comuniquen entre sí** sin importar en qué lenguaje o tecnología estén construidos.

👉 Es como un **puente** que conecta dos aplicaciones.

---

## 💡 Ejemplo simple

Supón que tienes una **app móvil** de clima y quieres obtener los datos del clima actual.
Tu app no tiene los datos, así que **llama a una API** de clima (por ejemplo, la API de OpenWeather).

Tu app envía una **petición (request)**:

```
GET https://api.openweathermap.org/data/2.5/weather?q=Lima&appid=TOKEN
```

La API responde (response) con datos en formato **JSON**:

```json
{
  "location": "Lima",
  "temperature": 26,
  "condition": "Soleado"
}
```

💬 En resumen:

> Una API define **cómo** interactuar con una aplicación, qué datos puedes enviar, qué recibirás, y cómo hacerlo.

---

# 🌐 2️⃣ ¿Qué es HTTP?

## 📘 Definición

**HTTP (HyperText Transfer Protocol)** es el **protocolo** que define **cómo se comunican los navegadores y los servidores web**.

Cada vez que accedes a una página web o a una API, estás usando HTTP.

👉 HTTP es el lenguaje que usan **los clientes (como un navegador o app móvil)** y **los servidores** para comunicarse.

---

## 📦 Estructura de una petición HTTP

Una **petición HTTP** tiene tres partes principales:

1. **Método** (indica la acción que quieres hacer)
2. **URL o Endpoint**
3. **Cabeceras y cuerpo (body)**

### Ejemplo:

```
POST /api/users HTTP/1.1
Host: api.miapp.com
Content-Type: application/json

{
  "nombre": "Christian",
  "email": "christian@ejemplo.com"
}
```

### Métodos HTTP más usados:

| Método   | Descripción                        | Ejemplo                              |
| -------- | ---------------------------------- | ------------------------------------ |
| `GET`    | Obtener información                | Obtener todos los usuarios           |
| `POST`   | Crear un nuevo recurso             | Crear un nuevo usuario               |
| `PUT`    | Actualizar un recurso existente    | Actualizar un usuario completo       |
| `PATCH`  | Actualizar parcialmente un recurso | Cambiar solo el correo de un usuario |
| `DELETE` | Eliminar un recurso                | Borrar un usuario                    |

---

## 📤 Respuestas HTTP

El servidor responde con un **código de estado** (status code) y datos.

| Código | Significado           | Ejemplo                   |
| ------ | --------------------- | ------------------------- |
| `200`  | OK                    | Todo salió bien           |
| `201`  | Created               | Recurso creado            |
| `400`  | Bad Request           | Error del cliente         |
| `401`  | Unauthorized          | Falta autenticación       |
| `404`  | Not Found             | No se encontró el recurso |
| `500`  | Internal Server Error | Error del servidor        |

---

# 🔄 3️⃣ ¿Qué es REST?

## 📘 Definición

**REST (Representational State Transfer)** es un **estilo de arquitectura** para diseñar APIs que usan HTTP como protocolo base.

👉 REST **no es una tecnología**, sino **un conjunto de principios** que una API debe seguir para ser sencilla, escalable y estándar.

---

## ⚙️ Principios básicos de REST:

1. **Cliente-Servidor**:
   El cliente (navegador, app móvil, etc.) y el servidor están separados.
   El cliente pide datos, y el servidor los entrega.

2. **Stateless (sin estado)**:
   Cada petición HTTP debe tener toda la información necesaria.
   El servidor no recuerda el estado anterior del cliente.

3. **Uniform Interface (interfaz uniforme)**:
   Todas las peticiones siguen una estructura coherente (por ejemplo, `GET /users`, `POST /users`, etc.).

4. **Recursos identificados por URLs**:
   Cada recurso (usuario, producto, pedido, etc.) tiene su **propio endpoint** único.
   Ejemplo:

   * `/api/users`
   * `/api/users/1`
   * `/api/products/25`

5. **Uso de métodos HTTP estándar**:
   REST usa los verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`) para representar operaciones sobre recursos.

---

## 💡 Ejemplo REST

Supón que tienes un recurso `usuarios`:

| Acción             | Método | URL            | Descripción                   |
| ------------------ | ------ | -------------- | ----------------------------- |
| Listar usuarios    | GET    | `/api/users`   | Obtiene todos los usuarios    |
| Obtener un usuario | GET    | `/api/users/1` | Obtiene un usuario por ID     |
| Crear usuario      | POST   | `/api/users`   | Crea un nuevo usuario         |
| Actualizar usuario | PUT    | `/api/users/1` | Actualiza un usuario completo |
| Eliminar usuario   | DELETE | `/api/users/1` | Elimina un usuario            |

Esto es una **API RESTful** 👇

---

# ⚙️ 4️⃣ ¿Qué es RESTful?

## 📘 Definición

Una **API RESTful** es una **API que cumple con los principios de REST**.

Es decir:

> Usa HTTP correctamente (GET, POST, PUT, DELETE), maneja recursos con URLs claras, y responde con datos estructurados (normalmente JSON).

---

## 💡 Ejemplo de API RESTful real (Express)

```js
import express from "express";
const app = express();
app.use(express.json());

let usuarios = [{ id: 1, nombre: "Christian" }];

// GET - obtener todos los usuarios
app.get("/api/users", (req, res) => {
  res.json(usuarios);
});

// GET - obtener un usuario por ID
app.get("/api/users/:id", (req, res) => {
  const user = usuarios.find(u => u.id == req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "No encontrado" });
});

// POST - crear un usuario
app.post("/api/users", (req, res) => {
  const nuevo = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT - actualizar usuario
app.put("/api/users/:id", (req, res) => {
  const i = usuarios.findIndex(u => u.id == req.params.id);
  if (i === -1) return res.status(404).json({ message: "No encontrado" });
  usuarios[i] = { ...usuarios[i], ...req.body };
  res.json(usuarios[i]);
});

// DELETE - eliminar usuario
app.delete("/api/users/:id", (req, res) => {
  usuarios = usuarios.filter(u => u.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log("Servidor RESTful corriendo en puerto 3000"));
```

💬 Esa API es **RESTful** porque:

* Usa métodos HTTP correctamente.
* Usa URLs para identificar recursos.
* Devuelve respuestas JSON.
* No guarda estado entre peticiones.

---

# 🧠 Resumen General

| Concepto    | Definición                                                | Ejemplo                                     |
| ----------- | --------------------------------------------------------- | ------------------------------------------- |
| **API**     | Interfaz que permite comunicación entre sistemas          | API de clima, API de pagos                  |
| **HTTP**    | Protocolo que define cómo se comunican cliente y servidor | GET, POST, PUT, DELETE                      |
| **REST**    | Estilo arquitectónico que usa HTTP para manejar recursos  | `/api/users`, `/api/products/1`             |
| **RESTful** | API que cumple los principios REST correctamente          | API construida con Express y rutas estándar |

---