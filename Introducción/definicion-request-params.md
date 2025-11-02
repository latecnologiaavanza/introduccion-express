## 🧠 1️⃣ ¿Qué es una Request?

En Express (y en HTTP en general), **una request (solicitud)** es lo que **el cliente (por ejemplo, el navegador o Thunder Client)** envía al servidor.

Por ejemplo, cuando escribes en el navegador:

```
http://localhost:3000/usuarios/15
```

El navegador hace una **request** (solicitud) al servidor, y el servidor puede responder con algo.

---

## 🧩 2️⃣ ¿Qué son los *Request Params* o *Route Params*?

Los **Request Params** (o **Route Params**) son **valores dinámicos** que se colocan **en la URL** y que Express puede **capturar directamente desde la ruta**.

En otras palabras:

> Son **partes variables** de la URL que sirven para **identificar recursos** (por ejemplo, un usuario, un producto o una publicación específica).

---

## ⚙️ 3️⃣ Ejemplo básico

Supongamos esta ruta:

```js
app.get('/usuarios/:id', (req, res) => {
  console.log(req.params);
  res.send(`Usuario con ID ${req.params.id}`);
});
```

Y haces esta solicitud en tu navegador o Thunder Client:

```
GET http://localhost:3000/usuarios/15
```

Entonces Express detecta que en la ruta tienes un parámetro `:id`
y lo captura como un objeto:

```js
req.params = { id: '15' }
```

📦 Resultado en consola:

```
{ id: '15' }
```

📤 Respuesta:

```
Usuario con ID 15
```

---

## 🧩 4️⃣ Ejemplo con varios parámetros

Puedes tener **más de uno**:

```js
app.get('/usuarios/:id/posts/:postId', (req, res) => {
  console.log(req.params);
  res.send(`Usuario ${req.params.id}, Post ${req.params.postId}`);
});
```

Si haces:

```
GET http://localhost:3000/usuarios/20/posts/7
```

📦 `req.params` será:

```js
{ id: '20', postId: '7' }
```

📤 Respuesta:

```
Usuario 20, Post 7
```

---

## 💬 5️⃣ Diferencia entre `req.params`, `req.query` y `req.body`

| Tipo       | Dónde se envía                       | Cómo se obtiene | Ejemplo                            |
| ---------- | ------------------------------------ | --------------- | ---------------------------------- |
| **params** | En la **URL**, como parte de la ruta | `req.params`    | `/usuarios/15`                     |
| **query**  | En la **URL**, después del signo `?` | `req.query`     | `/usuarios?id=15`                  |
| **body**   | En el **cuerpo de la solicitud**     | `req.body`      | enviado desde un formulario o JSON |

---

## 🔍 Ejemplo de los tres juntos:

```js
app.post('/usuarios/:id', (req, res) => {
  console.log('Params:', req.params); // /usuarios/15  → { id: '15' }
  console.log('Query:', req.query);   // /usuarios/15?activo=true → { activo: 'true' }
  console.log('Body:', req.body);     // JSON o formulario
  res.send('Datos recibidos');
});
```

URL:

```
POST http://localhost:3000/usuarios/15?activo=true
```

Body (JSON):

```json
{
  "nombre": "Christian"
}
```

📦 Resultado:

```js
Params: { id: '15' }
Query: { activo: 'true' }
Body: { nombre: 'Christian' }
```

---

## 🧠 En resumen:

| Concepto           | Significado                      | Ejemplo        | Se accede con   |
| ------------------ | -------------------------------- | -------------- | --------------- |
| **Request Params** | Datos variables en la ruta       | `/user/10`     | `req.params.id` |
| **Query Params**   | Parámetros después del `?`       | `/user?id=10`  | `req.query.id`  |
| **Body Params**    | Datos en el cuerpo (form o JSON) | `{ "id": 10 }` | `req.body.id`   |

---