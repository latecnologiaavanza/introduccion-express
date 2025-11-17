const express = require("express");
const morgan = require("morgan");

const app = express();
let productos = [
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

app.put("/productos/:id", (req, res) => {
  const newData = req.body;
  const productoFind = productos.find((p) => p.id === parseInt(req.params.id));

  if (!productoFind) {
    return res.status(404).json({ message: "Produco no encontrado" });
  }

  //map() recorre el array productos y crea un nuevo array basado en lo que retornes para cada elemento
  //Crea un nuevo objeto con los datos del producto p, pero reemplazando las propiedades con las que vienen en newData
  //Si NO coincide: Devuelve el producto igual, sin modificarlo
  // "..." sirve para copiar todas las propiedades de un objeto dentro de otro
  //Se copia todo lo de p, pero las propiedades que están en newData sobrescriben a las de p
  productos = productos.map((p) =>
    p.id === parseInt(req.params.id) ? { ...p, ...newData } : p
  );

  res.json({
    message: "Producto actualizado exitosamente"
  })
});

app.delete("/productos/:id", (req, res) => {
  const productoFind = productos.find(
    (producto) => producto.id === parseInt(req.params.id)
  );

  if (!productoFind) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  productos = productos.filter((p) => p.id !== parseInt(req.params.id));

  res.sendStatus(204);
});

app.get("/productos/:id", (req, res) => {
  const productoFind = productos.find((p) => p.id === parseInt(req.params.id));

  if (!productoFind) {
    return res.status(404).json({ message: "Produco no encontrado" });
  }

  res.json(productoFind);
});

app.listen(3000);
console.log(`Server on port ${3000}`);
