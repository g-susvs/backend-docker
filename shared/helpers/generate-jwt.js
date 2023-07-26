const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const privateKey = process.env.JWT_PRIVATE_KEY || "#5731s49r1v473k37";
    const token = jwt.sign(
      { id },
      privateKey,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log("Error - genarete JWT");
          reject(err);
        }
        resolve(token);
      }
    );
  });
};

module.exports = generateJWT;
