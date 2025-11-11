const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/productos", (req, res) => {
  res.send("Obteniendo Productos");
});

app.post("/productos", (req, res) => {
  res.send("Creando Productos");
});

app.put("/productos", (req, res) => {
  res.send("Actualizando Productos");
});

app.delete("/productos", (req, res) => {
  res.send("Eliminando Productos");
});

app.get("/productos/:id", (req, res) => {
  res.send("Obteniendo un Producto");
});

app.listen(3000);
console.log(`Server on port ${3000}`);
