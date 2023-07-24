require("dotenv").config();
const express = require("express");

const productRoutes = require("./components/product/routes");
const categoryRoutes = require("./components/category/routes");

const { dbConnect } = require("./database/connect");
const app = express();
const port = process.env.PORT || 3000;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Proyecto servicios"));
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

app.listen(port, () => {
  console.log(`Servicios corriendo en http://localhost:${port}`);
});
