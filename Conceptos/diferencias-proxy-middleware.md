## 🧩 1. ¿Qué es un **Middleware**?

### 🔹 Definición general

Un **middleware** es un **software intermedio** que se ejecuta **entre la solicitud del cliente y la respuesta del servidor**, **dentro de la aplicación**.
Su función es **procesar, modificar o validar** la información **antes** de que llegue al controlador final o **antes** de enviar la respuesta al cliente.

👉 En palabras simples:

> Un middleware es como un **filtro o capa lógica** que actúa **dentro del servidor** para realizar tareas comunes.

---

### 🔹 Funciones comunes de un middleware

* Validar datos enviados por el cliente.
* Verificar la autenticación o autorización de un usuario.
* Registrar logs (registro de peticiones).
* Manejar errores de manera centralizada.
* Analizar, modificar o enriquecer peticiones/respuestas.

---

### 🔹 Ejemplo en Express (Node.js)

```javascript
const express = require('express');
const app = express();

// Middleware personalizado
function logger(req, res, next) {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next(); // pasa al siguiente middleware o ruta
}

// Se usa el middleware
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hola desde el servidor');
});

app.listen(3000);
```

🧠 **Qué ocurre:**

1. Cada vez que llega una solicitud, se ejecuta `logger`.
2. Muestra un mensaje en la consola.
3. Llama a `next()` para continuar con la ejecución normal.

✅ **Conclusión:** El middleware actúa **dentro del servidor**, **procesando la lógica de la app**.

---

## 🌐 2. ¿Qué es un **Proxy**?

### 🔹 Definición general

Un **proxy** es un **intermediario de red** que **redirige o filtra** las peticiones entre un **cliente** y un **servidor**.
El cliente **no se comunica directamente** con el servidor final, sino **a través del proxy**.

👉 En palabras simples:

> Un proxy es un **intermediario externo** entre el cliente y el servidor.

---

### 🔹 Tipos de proxy más comunes

1. **Forward Proxy (Proxy directo)**
   Se coloca entre el **cliente** y el **servidor externo**.
   👉 Ejemplo: un proxy de empresa que filtra sitios web.

2. **Reverse Proxy (Proxy inverso)**
   Se coloca **del lado del servidor**, y distribuye o protege las peticiones entrantes.
   👉 Ejemplo: NGINX o Apache como proxy inverso.

---

### 🔹 Ejemplo de NGINX como **proxy inverso**

```nginx
server {
    listen 80;
    server_name midominio.com;

    location / {
        proxy_pass http://localhost:3000; # Redirige al servidor interno
    }
}
```

🧠 **Qué ocurre:**

1. El cliente accede a `midominio.com`.
2. NGINX recibe la solicitud (puerto 80).
3. La reenvía a un servidor Node.js en `localhost:3000`.
4. La respuesta del servidor se envía de vuelta al cliente a través del proxy.

✅ **Conclusión:** El proxy actúa **fuera del servidor**, **en la red**, redirigiendo o filtrando tráfico.

---

## ⚖️ 3. Diferencias entre Middleware y Proxy

| Característica         | **Middleware**                                                         | **Proxy**                                                                       |
| ---------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| 📍 Nivel               | Lógico / dentro de la aplicación                                       | Red / fuera de la aplicación                                                    |
| 🔄 Intermediario entre | Rutas o controladores dentro del mismo servidor                        | Cliente y servidor (o varios servidores)                                        |
| 🧠 Dónde se ejecuta    | Dentro del proceso del servidor (por ejemplo, Node.js, Spring, Django) | En un servidor o servicio independiente (por ejemplo, NGINX, Squid, Cloudflare) |
| ⚙️ Controla            | Peticiones internas y lógica de negocio                                | Flujo de tráfico entre equipos o servicios                                      |
| 🧰 Ejemplo de uso      | Autenticación, logs, validación, manejo de errores                     | Balanceo de carga, caché, anonimato, firewall, redirección                      |
| 💻 Ejemplo concreto    | `app.use(logger)` en Express                                           | `proxy_pass` en NGINX                                                           |

---

## 💡 4. Ejemplo combinado para entender la diferencia

Imagina una aplicación web con esta arquitectura:

```
Cliente → NGINX (Proxy inverso)
             ↓
        Servidor Node.js (Middlewares)
             ↓
          Base de datos
```

🧠 Flujo de una petición:

1. El **cliente** hace una solicitud HTTP.
2. **NGINX (proxy inverso)** la recibe primero y la **redirige al servidor interno**.
3. **Node.js** recibe la solicitud y ejecuta varios **middlewares** (por ejemplo, validación y autenticación).
4. Luego la ruta procesa la petición y devuelve una respuesta.
5. NGINX devuelve esa respuesta al cliente.

✅ En resumen:

* El **proxy** trabaja **afuera**, gestionando tráfico entre equipos.
* El **middleware** trabaja **adentro**, procesando la lógica dentro de tu aplicación.

---

## 📚 Ejemplo real

| Escenario                     | Middleware                                                               | Proxy                                                            |
| ----------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| **Autenticación de usuarios** | Middleware en Express verifica el token JWT antes de acceder a una ruta. | Proxy (NGINX) redirige peticiones HTTPS a HTTP interno.          |
| **Logs de auditoría**         | Middleware registra en la base de datos quién hizo la solicitud.         | Proxy guarda logs de acceso en un archivo de servidor.           |
| **Control de carga**          | Middleware no maneja balanceo.                                           | Proxy (NGINX o HAProxy) reparte tráfico entre varios servidores. |
| **Caché de respuestas**       | Middleware puede guardar datos en memoria temporal.                      | Proxy puede almacenar páginas enteras en caché.                  |

---

## 🧭 Resumen final

| Concepto               | Middleware                                     | Proxy                                                       |
| ---------------------- | ---------------------------------------------- | ----------------------------------------------------------- |
| Significado            | Capa lógica intermedia **dentro** del servidor | Servidor o servicio intermedio **entre cliente y servidor** |
| Lugar de acción        | Interno                                        | Externo                                                     |
| Nivel                  | Aplicación                                     | Red                                                         |
| Lenguaje / Herramienta | Express, Django, Spring Boot                   | NGINX, Apache, Cloudflare                                   |
| Ejemplo                | Validar token antes de acceder a una ruta      | Redirigir tráfico al backend correcto                       |

---