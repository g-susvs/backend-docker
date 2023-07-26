require("dotenv").config();
const express = require("express");

const routes = require("./routes");
const { dbConnect } = require("./database/connect");

const app = express();
const port = process.env.PORT || 3003;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Servicio - CATEGORY"));
app.use("/api/category", routes);

app.listen(port, () => {
  console.log(`Servicio categorias en http://localhost:${port}`);
});
