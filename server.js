const dotenv = require("dotenv");
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const config = require("./utils/config");

const server = http.createServer(app);

dotenv.config();

console.log("Starting app..");
console.log("Waiting for connection to MongoDB");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    console.log("Starting server..");
    server.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.reason)
    console.log("Could not connect to MongoDB server! Shutting down...");
    process.exit(1);
  });
