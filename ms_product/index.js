require("dotenv").config();
const express = require("express");

const routes = require("./routes");

const { dbConnect } = require("./database/connect");
const app = express();
const port = process.env.PORT || 3002;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Servicio - PRODUCT"));
app.use("/api/product", routes);

app.listen(port, () => {
  console.log(`Servicios corriendo en http://localhost:${port}`);
});
