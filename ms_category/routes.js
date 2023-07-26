const { Router } = require("express");
const { getCategories, createCategory } = require("./controllers");
const { body } = require("express-validator");
const { validateFields } = require("../shared/middlewares/validate-fields");

const router = Router();

router.get("/", getCategories);
router.post(
  "/",
  [body("name", "El 'name' es obligatorio").notEmpty(), validateFields],
  createCategory
);

module.exports = router;
