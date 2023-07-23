const { model, Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "",
  },
  //   TODO: category_id
});

ProductSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();

  rest["pid"] = _id;
  return rest;
};

module.exports = model("Product", ProductSchema);
