const express = require("express");

const app = express();

//Agrega un middleware a la aplicación Express
//Un middleware es una función que se ejecuta antes de que lleguen las peticiones a tus rutas
//En este caso, se usa para procesar el cuerpo (body) de las solicitudes HTTP
//El parámetro "next" también es una función e indica que ya terminó el trabajo
app.use((req, res, next) => {
  console.log(`Route: ${req.url} - Metodo: ${req.method}`);
  next();
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.all("/about", (req, res) => {
  res.send("About Page");
});


app.listen(3000);
console.log(`Server on Port ${3000}`);
