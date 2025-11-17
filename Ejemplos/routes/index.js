const express = require("express");

//express.Router() es una mini-aplicación de Express que sirve para manejar rutas de forma modular y organizada sin tener que poner todas las rutas en app.js o server.js
const router = express.Router();

router.all("/about", (req, res) => {
  res.send("About page");
});

router.all("/dashboard", (req, res) => {
  res.send("Dashboard page");
});

module.exports = router;
