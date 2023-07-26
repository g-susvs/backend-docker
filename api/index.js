require("dotenv").config();
const express = require("express");
const { dbConnect } = require("../database/connect");

const CONFIG = require("../config");
const app = express();
const port = CONFIG.service.port;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Proyecto servicios v2"));

app.listen(port, () => {
  console.log(`Servicios corriendo en http://localhost:${port}`);
});
