## 🧩 1. ¿Qué es JSON?

**JSON** significa **JavaScript Object Notation** (Notación de Objetos de JavaScript).
Es un **formato de texto ligero**, fácil de leer y escribir, que se utiliza para **almacenar y transmitir información estructurada**.

👉 En otras palabras:
JSON es una **forma estándar de representar datos** (como objetos, listas o valores) en texto plano.

---

## 🧠 2. Características principales de JSON

| Característica                 | Descripción                                                                                                                |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Formato de texto**           | Es texto plano (como un archivo `.txt`), no binario.                                                                       |
| **Basado en JavaScript**       | Su sintaxis viene de los objetos de JavaScript, pero puede ser usado por cualquier lenguaje (Python, Java, C#, PHP, etc.). |
| **Ligero y fácil de entender** | Muy fácil de leer tanto por humanos como por máquinas.                                                                     |
| **Ideal para APIs**            | Es el formato estándar para intercambiar datos entre cliente y servidor.                                                   |

---

## 📦 3. Estructura básica de un JSON

Un JSON se compone de:

* **Pares clave–valor**, como `"nombre": "Christian"`.
* Los datos están entre **llaves `{ }`**.
* Los **valores** pueden ser:

  * cadenas (`"texto"`)
  * números (`100`)
  * booleanos (`true` o `false`)
  * arreglos (`[ ]`)
  * objetos (`{ }`)
  * o `null`.

### 🔹 Ejemplo simple:

```json
{
  "nombre": "Christian",
  "edad": 18,
  "estudiante": true
}
```

---

### 🔹 Ejemplo más completo (anidado):

```json
{
  "nombre": "Christian Ramírez",
  "edad": 18,
  "habilidades": ["Java", "SQL", "Spring Boot"],
  "direccion": {
    "ciudad": "Ica",
    "pais": "Perú"
  }
}
```

---

## 🚀 4. ¿Para qué sirve JSON?

JSON se usa principalmente para **intercambiar datos entre sistemas**, especialmente entre un **cliente** (como un navegador o app móvil) y un **servidor** (backend o API).

### 📡 Ejemplo típico:

1. El cliente envía datos al servidor:

```json
{
  "usuario": "christian",
  "password": "12345"
}
```

2. El servidor responde:

```json
{
  "mensaje": "Inicio de sesión exitoso",
  "codigo": 200
}
```

💬 Aquí, ambos —cliente y servidor— entienden la información gracias al formato JSON.

---

## ⚙️ 5. JSON en APIs (ejemplo con HTTP)

Cuando haces una petición `POST` a una API, normalmente el cuerpo va en formato JSON:

### 📨 Petición:

```
POST /usuarios HTTP/1.1
Content-Type: application/json

{
  "nombre": "Christian",
  "email": "christian@example.com"
}
```

### 📬 Respuesta:

```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 1,
  "nombre": "Christian",
  "email": "christian@example.com"
}
```

---

## 🔧 6. JSON vs otros formatos

| Formato  | Descripción                                                              | Uso actual                |
| -------- | ------------------------------------------------------------------------ | ------------------------- |
| **JSON** | Ligero, fácil de leer, soportado por casi todos los lenguajes.           | 🔥 Más usado actualmente. |
| **XML**  | Más pesado, requiere etiquetas de apertura y cierre.                     | Antiguo, usado en SOAP.   |
| **YAML** | Más legible para humanos, usado en configuraciones (Docker, Kubernetes). | Complementario.           |

---

## 🧭 7. Resumen

| Concepto             | Definición                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------- |
| **JSON**             | Formato de texto para representar y transmitir datos estructurados.                      |
| **Significa**        | JavaScript Object Notation.                                                              |
| **Estructura**       | Claves y valores (`"clave": valor`).                                                     |
| **Usos principales** | Comunicación entre cliente-servidor, archivos de configuración, almacenamiento de datos. |
| **Ventajas**         | Ligero, simple, compatible con todos los lenguajes.                                      |

---
