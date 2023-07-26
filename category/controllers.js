const Category = require("./category-model");

const getCategories = async (req, res) => {
  const catgories = await Category.find();

  return res.json({
    msg: "List categories",
    catgories,
  });
};

const createCategory = async (req, res) => {
  const category = new Category(req.body);

  await category.save();

  return res.json({
    msg: "create category",
    category,
  });
};

module.exports = {
  getCategories,
  createCategory,
};
