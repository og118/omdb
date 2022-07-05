require("dotenv").config();

let MONGODB_URI = process.env.MONGODB_URI;
let PORT = process.env.PORT;
let BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS;

module.exports = {
  MONGODB_URI,
  PORT,
  BCRYPT_SALT_ROUNDS
};
