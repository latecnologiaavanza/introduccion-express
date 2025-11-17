const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'))

app.set('appName','Express v1')

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

app.use((req, res, next) => {
  if (req.query.login === "christian") {
    next();
  } else {
    res.send("No Autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.listen(3000);
console.log(`Server ${app.get('appName')} on Port ${3000}`);
