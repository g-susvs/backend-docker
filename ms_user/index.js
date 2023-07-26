require("dotenv").config();
const express = require("express");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3001;

const mongoose = require("mongoose");
const { dbConnect } = require("./database/connect");

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Servicio - USER"));
app.use("/api/user", routes);

app.listen(port, () => {
  console.log(`Servicio usuarios corriendo en http://localhost:${port}`);
});
