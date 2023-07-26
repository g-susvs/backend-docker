const express = require("express");
const { dbConnect } = require("../database/connect");
const routes = require("./routes");
const CONFIG = require("../config");

const app = express();
const port = CONFIG.msProduct.port;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Servicio - PRODUCT</h1>"));
app.use("/api/product", routes);

app.listen(port, () => {
  console.log(`Servicio product corriendo en http://localhost:${port}`);
});
