const express = require("express");

//Crea una instancia de aplicación Express
//Esta variable app es el objeto principal que usas para definir rutas, middlewares, etc
const app = express();

//Esto agrega un middleware que le dice a Express que debe interpretar el cuerpo (body) de las solicitudes HTTP como texto plano
//Con express.text(), Express leerá el contenido textual del body y lo colocará en req.body
//app.use() es una función de Express que sirve para registrar middlewares o rutas base dentro de tu aplicación
//Cada vez que llegue una petición (sin importar el método o la ruta específica), ejecuta esta función o este módulo antes de continuar
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(3000);
console.log(`Server on Port ${3000}`);
