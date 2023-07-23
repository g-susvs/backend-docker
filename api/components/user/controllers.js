const bcrypt = require("bcryptjs");

const User = require("./user-model");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json({
    msg: "Lista de usuarios",
    users,
  });
};

const saveUser = async (req, res) => {
  const { password } = req.body;
  const user = new User(req.body);

  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  return res.json({
    msg: "Crear usuario",
    user,
  });
};

module.exports = {
  getUsers,
  saveUser,
};
