const express = require("express");

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello/:username", (req, res) => {
  console.log(typeof req.params.username);
  console.log(req.params.username);
  res.send(`Hola ${req.params.username.toUpperCase()}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Resultado: ${parseInt(x) + parseInt(y)}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "christian") {
    return res.sendFile("./JavaScript.png", {
      root: __dirname,
    });
  }

  res.send("El usuario no tiene acceso");
});

app.get('/nombre/:nombre/age/:age', (req,res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
})

app.listen(3000);
console.log(`Server on Port ${3000}`);
