const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./JavaScript.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    nombre: "Christian",
    apellido: "Ramirez",
    notas: [5, 10, 12],
    direccion: {
      ciudad: "Lima",
      distrito: "SJM",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000);
console.log(`Server on Port ${3000}`);
