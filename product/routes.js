const { Router } = require("express");
const { getProducts, createProduct } = require("./controllers");
const { body } = require("express-validator");
const { validateFields } = require("./middlewares/validate-fields");

const router = Router();

router.get("/", getProducts);
router.post(
  "/",
  [body("name", "El 'name' es obligatorio").notEmpty(), validateFields],
  createProduct
);

module.exports = router;
