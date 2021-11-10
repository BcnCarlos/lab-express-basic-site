const express = require("express");

const path = require("path");

const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.all("/home", (request, response) => {
  response.render("home");
});

app.all("/about", (request, response) => {
  response.render("about");
});

app.all("/works", (request, response) => {
  response.render("works");
});

app.listen(4000, () => {
  console.log("HELLO ");
});
