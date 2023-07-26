const express = require("express");
const { dbConnect } = require("../database/connect");
const routes = require("./routes");
const CONFIG = require("../config");

const app = express();
const port = CONFIG.msCategory.port;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Servicio - CATEGORY</h1>"));
app.use("/api/category", routes);

app.listen(port, () => {
  console.log(`Servicio category corriendo en http://localhost:${port}`);
});
