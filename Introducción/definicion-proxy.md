## 🌐 ¿Qué es un Proxy?

### 🔹 Definición general

Un **proxy** (del inglés *intermediario o representante*) es un **servidor o programa que actúa como intermediario** entre un **cliente** (por ejemplo, tu navegador) y un **servidor de destino** (por ejemplo, una página web).

> En otras palabras: cuando usas un proxy, **tu petición no va directamente al servidor**, sino que **pasa primero por el proxy**, el cual **la recibe, la analiza y la reenvía** al servidor final.

Luego, el proxy también puede **recibir la respuesta** del servidor y **devolverla al cliente**.

---

## 🧠 ¿Para qué sirve un proxy?

El proxy se utiliza para **controlar, optimizar o proteger** la comunicación entre el cliente y el servidor.
Sus funciones más comunes son:

1. **Filtrar contenido**

   * Bloquear acceso a ciertos sitios web o tipos de contenido.
   * Ejemplo: en una empresa, el proxy puede bloquear el acceso a redes sociales.

2. **Anonimato y privacidad**

   * Oculta la IP real del cliente (el servidor solo ve la IP del proxy).
   * Ejemplo: un usuario navega por Internet mediante un proxy para no revelar su ubicación real.

3. **Caché de contenido**

   * Guarda copias de recursos (imágenes, páginas, etc.) para servirlas más rápido.
   * Ejemplo: si muchos usuarios piden la misma página, el proxy la entrega desde su caché sin consultar al servidor original.

4. **Control de tráfico**

   * Limita o supervisa el uso de la red.
   * Ejemplo: un proxy en una escuela puede registrar qué sitios visitan los estudiantes.

5. **Seguridad**

   * Filtra malware, anuncios o ataques externos antes de que lleguen al cliente.
   * También puede cifrar el tráfico para protegerlo.

---

## ⚙️ Tipos de Proxy

### 1. 🧭 **Forward Proxy (Proxy directo o de reenvío)**

* Se coloca **entre el cliente y el servidor**.
* Es el tipo más común de proxy que usan los usuarios o empresas.
* El **cliente** sabe que está usando un proxy.
* Se usa para:

  * Filtrar acceso.
  * Navegar anónimamente.
  * Caching.

**Ejemplo gráfico:**

```
Cliente → Proxy → Servidor web
```

**Ejemplo real:**
Una empresa configura un proxy interno para que todo el tráfico web pase por él:

* El empleado accede a `https://www.youtube.com`
* El proxy revisa si ese sitio está permitido.

  * Si no lo está → bloquea la conexión.
  * Si sí → reenvía la solicitud al sitio real y devuelve la respuesta.

---

### 2. 🛰️ **Reverse Proxy (Proxy inverso)**

* Se coloca **del lado del servidor**, frente a uno o varios servidores internos.
* El **cliente no sabe** que hay un proxy; cree que se conecta al servidor real.
* Se usa para:

  * Balancear carga (distribuir peticiones entre varios servidores).
  * Proteger los servidores reales (oculta sus direcciones IP).
  * Mejorar rendimiento con caché.
  * Cifrar tráfico HTTPS.

**Ejemplo gráfico:**

```
Cliente → Proxy inverso (Nginx) → Servidores internos
```

**Ejemplo real:**
Una empresa tiene varios servidores web que manejan tráfico pesado.
En lugar de exponerlos directamente, coloca un **Nginx** como *reverse proxy* que:

* Recibe todas las peticiones.
* Decide qué servidor las atiende (balanceo de carga).
* Devuelve la respuesta al cliente.

---

### 3. 🌍 **Transparent Proxy (Proxy transparente)**

* El usuario **no sabe** que está usando un proxy.
* Se usa normalmente por **proveedores de Internet, universidades o gobiernos** para filtrar o almacenar en caché contenido.
* Llamado “transparente” porque **no requiere configuración del cliente**.

---

### 4. 🔒 **Anonymous y High Anonymity Proxy**

* Diseñados para **ocultar completamente la identidad del cliente**.
* Un **Anonymous Proxy** oculta la IP del usuario pero se identifica como proxy.
* Un **High Anonymity Proxy** (también llamado *Elite Proxy*) ni siquiera revela que es un proxy.

---

### 5. ☁️ **Proxy de aplicación (Application Proxy)**

* Se especializa en un tipo de tráfico (HTTP, FTP, correo, etc.).
* Analiza y controla las solicitudes de una aplicación específica.
  Ejemplo: un proxy HTTP solo maneja tráfico web.

---

## 💡 Ejemplo real de uso (HTTP Proxy)

Supón que configuras tu navegador para usar un proxy HTTP en `192.168.1.100:8080`.

1. Abres `https://www.google.com`.
2. Tu navegador **no contacta directamente a Google**.
   En lugar de eso:

   * Envía la solicitud al proxy (`192.168.1.100`).
3. El proxy revisa la solicitud.

   * Si tiene la página en caché, te la devuelve directamente.
   * Si no, la solicita a Google.
4. Google responde al proxy.
5. El proxy te envía la respuesta.

De esta forma, Google nunca ve tu IP real: solo la del proxy.

---

## 🧱 Ejemplo de configuración de un proxy inverso con **Nginx**

```nginx
server {
    listen 80;
    server_name midominio.com;

    location / {
        proxy_pass http://localhost:3000;   # Redirige a un servidor interno
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

👉 Aquí:

* Nginx recibe las peticiones en el puerto 80.
* Las redirige al servidor interno que corre en el puerto 3000 (por ejemplo, una app en Node.js).
* El cliente nunca ve ese puerto ni sabe que existe otro servidor detrás.

---

## 📊 Resumen final

| Tipo de Proxy            | Posición                        | Visible para el cliente | Usos principales                      |
| ------------------------ | ------------------------------- | ----------------------- | ------------------------------------- |
| **Forward Proxy**        | Entre cliente y servidor        | Sí                      | Filtrar, anonimato, cache             |
| **Reverse Proxy**        | Frente a los servidores         | No                      | Balanceo de carga, seguridad, caching |
| **Transparent Proxy**    | Entre ambos (sin configuración) | No                      | Monitoreo, control de red             |
| **Anonymous Proxy**      | Entre ambos                     | Parcialmente            | Ocultar IP                            |
| **High Anonymity Proxy** | Entre ambos                     | No                      | Navegación completamente anónima      |

---
