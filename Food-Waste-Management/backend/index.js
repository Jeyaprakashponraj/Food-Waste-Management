const express = require("express");
require("dotenv").config();
const users = require("./Routes/users");
const connectDb = require("./Config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", users);

connectDb();

app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
