## 🧩 ¿Qué es NGINX?

**NGINX** (se pronuncia *“engine-x”*) es un **servidor web de alto rendimiento** que también puede actuar como:

* **Servidor proxy inverso**
* **Balanceador de carga**
* **Servidor de caché**
* **Servidor de archivos estáticos**
* **Gateway o proxy para microservicios**

Fue diseñado para manejar **miles de conexiones concurrentes** de manera eficiente y con **bajo consumo de recursos**, lo que lo convierte en una herramienta esencial en entornos modernos.

---

## ⚙️ 1. NGINX como **servidor web**

Es el uso más básico y tradicional.
Sirve **archivos estáticos** (HTML, CSS, JS, imágenes, videos, etc.) directamente al navegador.

**Ejemplo:**

```nginx
server {
    listen 80;
    server_name www.midominio.com;

    root /var/www/html;
    index index.html;
}
```

👉 Aquí:

* NGINX escucha en el puerto 80.
* Devuelve archivos directamente desde la carpeta `/var/www/html`.

✅ **Usos comunes:**

* Hosting de páginas estáticas.
* Sitios web personales o institucionales.
* Documentación estática o portafolios.

---

## 🔁 2. NGINX como **proxy inverso**

Es probablemente su **uso más popular** hoy en día.

Un **proxy inverso** se coloca **delante de uno o varios servidores de aplicaciones** (por ejemplo, Node.js, Spring Boot, Flask, etc.) y **redirige el tráfico hacia ellos**.

**Ejemplo:**

```nginx
server {
    listen 80;
    server_name api.midominio.com;

    location / {
        proxy_pass http://localhost:8080;
    }
}
```

🧠 Aquí:

* NGINX recibe todas las peticiones en el puerto 80.
* Las envía (proxy_pass) al servidor interno (por ejemplo, una API Node.js en el puerto 8080).
* El cliente nunca ve ese puerto ni el servidor real.

✅ **Usos comunes:**

* Centralizar el acceso a múltiples servicios.
* Ocultar servidores internos por seguridad.
* Mejorar rendimiento con caché.
* Redirigir tráfico HTTPS a HTTP interno.

---

## ⚖️ 3. NGINX como **balanceador de carga**

Cuando tienes **varios servidores** que atienden la misma aplicación, NGINX puede **distribuir las solicitudes entre ellos** para evitar sobrecargas.

**Ejemplo:**

```nginx
upstream backend {
    server 192.168.1.10;
    server 192.168.1.11;
    server 192.168.1.12;
}

server {
    listen 80;
    server_name app.midominio.com;

    location / {
        proxy_pass http://backend;
    }
}
```

🧠 Aquí:

* El bloque `upstream` define un grupo de servidores backend.
* NGINX reparte las peticiones entre ellos (por defecto con *round-robin*).

✅ **Usos comunes:**

* Escalar horizontalmente aplicaciones.
* Mejorar disponibilidad (si un servidor falla, los demás siguen).
* Equilibrar carga en microservicios o clústeres.

---

## ⚡ 4. NGINX como **servidor de caché**

NGINX puede **almacenar copias temporales** de respuestas para entregarlas más rápido sin consultar al servidor backend cada vez.

**Ejemplo:**

```nginx
location /api/ {
    proxy_pass http://localhost:8080;
    proxy_cache my_cache;
    proxy_cache_valid 200 10m;
}
```

🧠 Aquí:

* Las respuestas con código `200` se almacenan por **10 minutos**.
* Si otro cliente pide la misma URL, NGINX la entrega directamente desde su caché.

✅ **Usos comunes:**

* Acelerar respuestas en APIs muy consultadas.
* Reducir carga en servidores backend.
* Mejorar tiempos de respuesta.

---

## 🔒 5. NGINX como **terminador SSL/TLS**

También puede gestionar el **cifrado HTTPS**, evitando que los servidores internos deban hacerlo.
Esto se llama **SSL termination**.

**Ejemplo:**

```nginx
server {
    listen 443 ssl;
    server_name www.midominio.com;

    ssl_certificate /etc/nginx/ssl/midominio.crt;
    ssl_certificate_key /etc/nginx/ssl/midominio.key;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

🧠 Aquí:

* NGINX recibe tráfico HTTPS, lo descifra y envía el tráfico HTTP a los servidores internos.
* Los backends no necesitan certificados.

✅ **Usos comunes:**

* Centralizar certificados SSL.
* Simplificar configuración de seguridad.
* Reducir carga de cifrado en los servidores internos.

---

## 🧩 6. NGINX en **arquitecturas modernas**

NGINX se usa en **casi todos los entornos modernos**, especialmente en:

| Entorno                        | Cómo se usa                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| 🌐 **Sitios web**              | Servidor web principal o proxy inverso.                        |
| 🧱 **Microservicios**          | Gateway o proxy entre servicios.                               |
| 🧺 **Docker y Kubernetes**     | Como **ingress controller**, gestionando rutas hacia los pods. |
| ☁️ **Cloud (AWS, GCP, Azure)** | Frente a aplicaciones desplegadas en la nube.                  |
| 🧠 **APIs REST o GraphQL**     | Proxy inverso con balanceo, caching y HTTPS.                   |

---

## 💡 Ejemplo típico en una arquitectura moderna

```
[Cliente]
   ↓
[NGINX - Reverse Proxy / SSL / Balanceo]
   ↓
[Aplicación Node.js o Spring Boot]
   ↓
[Base de datos MySQL / PostgreSQL]
```

✅ El cliente solo ve a **NGINX**, no los servidores internos.
✅ NGINX mejora **rendimiento, seguridad y escalabilidad**.

---

## 🏁 Resumen final

| Rol de NGINX                | Función principal                          | Beneficio              |
| --------------------------- | ------------------------------------------ | ---------------------- |
| Servidor web                | Servir archivos estáticos                  | Rápido y eficiente     |
| Proxy inverso               | Intermediario entre cliente y backend      | Seguridad y control    |
| Balanceador de carga        | Distribuir tráfico entre varios servidores | Escalabilidad          |
| Caché                       | Guardar respuestas frecuentes              | Rendimiento            |
| Terminador SSL              | Manejar HTTPS                              | Simplifica y protege   |
| Gateway (en microservicios) | Redirigir tráfico entre servicios          | Organización y control |