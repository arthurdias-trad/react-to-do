const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require(path.join(__dirname, "config", "db"));

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

connectDB();

const todos = require(path.join(__dirname, "routes", "todos"));

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up router
app.use("/api/todos", todos);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servir running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
