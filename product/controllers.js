const Product = require("./product-model");

const getProducts = async (req, res) => {
  const products = await Product.find();

  return res.json({
    msg: "List products",
    products,
  });
};

const createProduct = async (req, res) => {
  const product = new Product(req.body);

  await product.save();

  return res.json({
    msg: "Create - product",
    product,
  });
};

module.exports = {
  getProducts,
  createProduct,
};
