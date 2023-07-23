require("dotenv").config();
const express = require("express");

const userRoutes = require("./api/components/user/routes");
const productRoutes = require("./api/components/product/routes");
const categoryRoutes = require("./api/components/user/routes");

const { dbConnect } = require("./database/connect");
const app = express();
const port = process.env.PORT || 3000;

dbConnect();

app.use(express.json());

app.get("/", (req, res) => res.send("Proyecto servicios"));
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

app.listen(port, () => {
  console.log(`Servicio usuarios corriendo en http://localhost:${port}`);
});
