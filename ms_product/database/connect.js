require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;

    await mongoose.connect(mongoURL);
    console.log("DB connected");
  } catch (err) {
    console.log("Database no connected");
  }
};

module.exports = {
  dbConnect,
};
