require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const mongoURL =
      process.env.MONGO_URL ||
      "mongodb+srv://admin:IzKQ6dDS5fBJIg2n@mycluster.l8ftf.mongodb.net/db_microservices";

    await mongoose.connect(mongoURL);
    console.log("DB connected");
  } catch (err) {
    console.log("Database no connected");
  }
};

module.exports = {
  dbConnect,
};
