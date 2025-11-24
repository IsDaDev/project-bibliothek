const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "styles")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/book-overview", (req, res) => {
  res.render("book_overview");
});

app.post("/api/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
});
