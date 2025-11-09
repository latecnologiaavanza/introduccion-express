## 🧩 1. ¿Qué es *Logging*?

### 📖 Definición

**Logging** (del inglés *log*, “registro”) es el **proceso de registrar información importante del comportamiento de una aplicación** mientras se ejecuta.
Estos registros se guardan en archivos, bases de datos o servicios externos y permiten **analizar, depurar (debuggear)** y **monitorear** el sistema.

---

### 🎯 Propósito del Logging

El *logging* sirve para:

* 📜 **Registrar eventos importantes:** como inicio de sesión, errores, peticiones HTTP, etc.
* 🐞 **Depurar errores:** saber qué falló y en qué parte del código.
* 📊 **Monitorear el rendimiento:** detectar cuellos de botella, tiempos de respuesta.
* 🧠 **Auditar o rastrear acciones:** saber quién hizo qué y cuándo (muy útil en seguridad).

---

### ⚙️ Ejemplo en JavaScript (Express)

```javascript
const express = require('express');
const app = express();

// Ejemplo de logging manual
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // permite que siga al siguiente middleware o ruta
});

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(3000, () => console.log('Servidor escuchando en puerto 3000'));
```

📘 **Explicación:**

* Cada vez que llega una petición (`GET`, `POST`, etc.), el middleware imprime en consola la fecha, el método y la URL.
* Esto es un ejemplo básico de **logging de peticiones**.
* En sistemas grandes, se usan librerías como **Winston**, **Morgan** o **Pino** para almacenar logs en archivos o servidores externos.

---

### 🧾 Ejemplo en Java (Spring Boot)

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
public class DemoController {
    private static final Logger logger = LoggerFactory.getLogger(DemoController.class);

    @GetMapping("/hello")
    public String hello() {
        logger.info("Petición recibida en /hello");
        return "Hola Mundo";
    }
}
```

📘 **Explicación:**

* `Logger` registra información (nivel INFO).
* Los logs se guardan en la consola o en archivos, según la configuración.
* Se pueden definir distintos **niveles de log**:

| Nivel   | Descripción                      | Ejemplo                           |
| ------- | -------------------------------- | --------------------------------- |
| `TRACE` | Detalles de ejecución muy finos  | Flujo interno de métodos          |
| `DEBUG` | Información para desarrolladores | Variables, pasos internos         |
| `INFO`  | Información general              | “Servidor iniciado correctamente” |
| `WARN`  | Advertencias                     | “Espacio en disco bajo”           |
| `ERROR` | Errores graves                   | “No se pudo conectar a la BD”     |

---

## ⚙️ 2. ¿Qué es un *Middleware*?

### 📖 Definición

Un **middleware** es una **función intermedia** que se ejecuta **entre la solicitud (request)** y **la respuesta (response)** de un servidor.

👉 Su función es **interceptar, analizar o modificar** la petición o la respuesta antes de llegar al destino final.

---

### 🎯 Propósito del Middleware

Los middlewares sirven para tareas como:

* 🧾 **Registrar logs de las peticiones** (como viste antes)
* 🔐 **Autenticación y autorización**
* 🧼 **Validación de datos**
* 🧠 **Gestión de errores**
* 🌍 **CORS (Cross-Origin Resource Sharing)**
* 🧰 **Compresión, parseo de JSON, manejo de cookies, etc.**

---

### ⚙️ Ejemplo en Express (Node.js)

```javascript
const express = require('express');
const app = express();

// Middleware global (se ejecuta antes de todas las rutas)
app.use((req, res, next) => {
  console.log('Middleware 1: Se recibió una petición');
  next(); // continúa con el siguiente middleware o ruta
});

app.use((req, res, next) => {
  console.log('Middleware 2: Analizando cabeceras');
  next();
});

app.get('/', (req, res) => {
  res.send('Respuesta del servidor');
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
```

🧠 **Flujo:**

1. El cliente envía una solicitud a `/`.
2. `Middleware 1` se ejecuta primero.
3. `Middleware 2` se ejecuta segundo.
4. Finalmente, llega al **manejador de ruta** (`app.get`).

Cada middleware puede:

* Procesar o modificar `req` o `res`.
* Llamar a `next()` para continuar.
* Terminar la respuesta (`res.send(...)`).

---

### ⚙️ Ejemplo en Spring Boot (Java)

En Spring, el equivalente de middleware se llama **Interceptor** o **Filter**.

```java
@Component
public class LoggingFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
        throws IOException, ServletException {

        System.out.println("Petición interceptada: " + ((HttpServletRequest) request).getRequestURI());
        chain.doFilter(request, response); // continúa con el siguiente filtro o controlador
    }
}
```

---

## 🔄 Diferencia entre *Logging* y *Middleware*

| Concepto       | Descripción                                                            | Ejemplo                                         |
| -------------- | ---------------------------------------------------------------------- | ----------------------------------------------- |
| **Logging**    | Registrar información de eventos o errores                             | Guardar en un archivo cada petición o error     |
| **Middleware** | Componente que intercepta solicitudes para procesarlas antes o después | Verificar token JWT antes de acceder a una ruta |

👉 En pocas palabras:

> El *logging* **usa** un *middleware* (entre otras técnicas) para registrar información de cada solicitud.

---

## 💡 Ejemplo combinado

```javascript
const express = require('express');
const app = express();

// Middleware de logging
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// Middleware de autenticación (ejemplo)
app.use((req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Acceso denegado');
  }
  next();
});

app.get('/home', (req, res) => res.send('Bienvenido al sistema'));

app.listen(3000, () => console.log('Servidor iniciado'));
```

---

## 🧠 Resumen Final

| Concepto       | Qué hace                                                | Dónde se usa                                       |
| -------------- | ------------------------------------------------------- | -------------------------------------------------- |
| **Logging**    | Registra eventos, errores y actividad                   | Consola, archivos, bases de datos                  |
| **Middleware** | Intercepta solicitudes y respuestas para aplicar lógica | Servidores backend (Express, Spring, Django, etc.) |
| **Relación**   | Un *middleware* puede usarse para implementar *logging* | Middleware de logging, autenticación, etc.         |

---