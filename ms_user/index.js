const express = require("express");
const CONFIG = require("../config");
const routes = require("./routes");
const { dbConnect } = require("../database/connect");

const app = express();
const port = CONFIG.msUser.port;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("<h1>Servicio - USER</h1>"));
app.get("/api", (req, res) => res.send("<h1>API - USER</h1>"));
app.use("/api/user", routes);

app.listen(port, () => {
  console.log(`Servicio usuarios corriendo en http://localhost:${port}`);
});
