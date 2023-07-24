const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

CategorySchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();

  rest["cid"] = _id;
  return rest;
};

module.exports = model("Category", CategorySchema);
