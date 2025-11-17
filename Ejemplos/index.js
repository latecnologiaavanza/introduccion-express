const express = require("express");
const morgan = require("morgan");

const app = express();

const HomeRoutes = require("./routes/index");
const UserRoutes = require("./routes/users");

app.use(morgan("dev"));

app.use(HomeRoutes);
app.use(UserRoutes);

app.use(express.static("./public"));

app.listen(3000);
console.log(`Server on Port ${3000}`);
