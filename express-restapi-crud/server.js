const express = require("express");
const morgan = require("morgan");

const app = express();
const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 5000,
  },
  {
    id: 2,
    nombre: "IPhone",
    precio: 7000,
  },
];

app.use(morgan("dev"));
app.use(express.json());

app.get("/productos", (req, res) => {
  res.json(productos);
});

app.post("/productos", (req, res) => {
  //El operador spread (...) copia todas las propiedades de un objeto dentro de otro
  const newProducto = { ...req.body, id: productos.length + 1 };
  productos.push(newProducto);
  res.json(newProducto);
});

app.put("/productos", (req, res) => {
  res.send("Actualizando Productos");
});

app.delete("/productos", (req, res) => {
  res.send("Eliminando Productos");
});

app.get("/productos/:id", (req, res) => {
  const productoFind = productos.find((p)=> p.id === parseInt(req.params.id));

  if (!productoFind) {
    return res.status(404).json({ message: "Produco no encontrado" });
  }

  res.json(productoFind);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
