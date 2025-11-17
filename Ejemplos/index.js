const express = require("express");
const morgan = require("morgan");
require("ejs");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const HomeRoutes = require("./routes/index");
const UserRoutes = require("./routes/users");

app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.use(express.static("./public"));

app.listen(3000);
console.log(`Server on Port ${3000}`);
