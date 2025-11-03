## 🧩 1. Contexto: ¿Qué es Express?

**Express.js** es un **framework de Node.js** que permite crear **servidores web y APIs** de forma simple.
Cuando un cliente (como Postman o el navegador) hace una petición HTTP a una ruta, Express te permite **acceder a los datos enviados** en esa petición.

Esos datos pueden venir de varias formas:

* En la **URL** (como parámetros o queries)
* En el **body** (para `POST`, `PUT`, etc.)
* En las **cabeceras (headers)**

Nos vamos a enfocar en las **queries** y los **params**.

---

## 🔹 2. ¿Qué son los **Request Params** (`req.params`)?

Los **params** (parámetros de ruta) son **valores que vienen dentro de la URL**, como parte de su estructura.
Se usan cuando necesitas **identificar un recurso específico** (por ejemplo, un usuario, un producto, un pedido).

👉 **Definición formal:**
Los **request params** son segmentos de la ruta definidos con dos puntos (`:`) que Express reemplaza con valores reales cuando se hace la petición.

### 🔸 Ejemplo

```js
app.get('/usuarios/:id', (req, res) => {
  const idUsuario = req.params.id;
  res.send(`El usuario con ID ${idUsuario}`);
});
```

Si visitas:

```
http://localhost:3000/usuarios/10
```

Respuesta:

```
El usuario con ID 10
```

Aquí:

* `:id` es un **param**
* `req.params.id` → `"10"`

📌 **Uso típico:** identificar un recurso (ej: `/productos/5`, `/usuarios/10`, `/posts/12`)

---

## 🔹 3. ¿Qué son las **Query Strings** (`req.query`)?

Las **queries** o **query strings** son **pares clave-valor añadidos al final de la URL** después del signo de interrogación `?`.
Se usan para **filtrar, buscar o paginar datos**, no para identificar recursos.

👉 **Definición formal:**
Las **query strings** son parámetros opcionales que se envían en la URL para modificar la solicitud sin alterar la ruta base.

### 🔸 Ejemplo

```js
app.get('/usuarios', (req, res) => {
  const nombre = req.query.nombre;
  const edad = req.query.edad;
  res.send(`Buscando usuarios con nombre ${nombre} y edad ${edad}`);
});
```

Si visitas:

```
http://localhost:3000/usuarios?nombre=Christian&edad=18
```

Respuesta:

```
Buscando usuarios con nombre Christian y edad 18
```

Aquí:

* `?nombre=Christian&edad=18` → son **query strings**
* `req.query.nombre` → `"Christian"`
* `req.query.edad` → `"18"`

📌 **Uso típico:** filtrar o buscar (ej: `/productos?categoria=ropa`, `/usuarios?edad=18&pais=Peru`)

---

## ⚖️ 4. Diferencias entre **params** y **query**

| Característica              | `req.params`                                        | `req.query`                                    |
| --------------------------- | --------------------------------------------------- | ---------------------------------------------- |
| **Dónde aparece en la URL** | En la ruta, como parte del camino (`/usuarios/:id`) | Después del signo `?` (`/usuarios?nombre=...`) |
| **Sintaxis en Express**     | `req.params.nombreParametro`                        | `req.query.nombreParametro`                    |
| **Propósito**               | Identificar un recurso específico                   | Filtrar, buscar o modificar una consulta       |
| **Ejemplo de ruta**         | `/usuarios/10`                                      | `/usuarios?edad=18&pais=Peru`                  |
| **Ejemplo de uso**          | Obtener usuario por ID                              | Buscar usuarios por criterios                  |
| **Obligatoriedad**          | Parte de la ruta (obligatorio)                      | Opcional                                       |

---

## 🧠 5. Ejemplo completo combinando ambos

```js
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;           // parámetro de ruta
  const filtro = req.query.filtro;    // query string opcional
  res.send(`Usuario ${id}, filtro aplicado: ${filtro || 'ninguno'}`);
});
```

Llamada:

```
http://localhost:3000/usuarios/5?filtro=activo
```

Salida:

```
Usuario 5, filtro aplicado: activo
```

---

## 🧭 6. Resumen final

| Concepto                | Definición                                                                              | Ejemplo                               |
| ----------------------- | --------------------------------------------------------------------------------------- | ------------------------------------- |
| **Query (req.query)**   | Parámetros opcionales añadidos al final de la URL para filtrar o modificar la búsqueda. | `/productos?categoria=ropa&precio=50` |
| **Params (req.params)** | Parte fija de la ruta, usada para identificar un recurso específico.                    | `/productos/50`                       |

---