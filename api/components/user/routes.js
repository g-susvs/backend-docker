const { Router } = require("express");
const { getUsers, saveUser } = require("./controllers");
const { body } = require("express-validator");

const { validateFields } = require("../../middlewares/validate-fields");

const router = Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    body("name", "El 'name' es obligatorio").notEmpty(),
    body("email", "El 'email' no es válido").isEmail(),
    body("password", "Debe tener mas de 6 caracteres").isLength({ min: 6 }),
    validateFields,
  ],
  saveUser
);

module.exports = router;
