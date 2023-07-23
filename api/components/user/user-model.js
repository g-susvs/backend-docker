const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, _id, ...rest } = this.toObject();

  rest["uid"] = _id;
  return rest;
};

module.exports = model("User", UserSchema);
