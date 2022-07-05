const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const appRouter = require("./app/routers/appRouter")

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "",
    credentials: true,
  })
);
app.use(xss());
app.use(cookieParser());
app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());

app.use("/", appRouter);
app.get("/", (req, res) => {
  res.send("Welcome to og118's movie db");
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("*", (req, res) => {
  res.send("404. Not found")
})

module.exports = app;
