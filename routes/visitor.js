const express = require("express");
const visitorUser = require("./../controllers/visitor.js");
const app = express.Router();

app.post("/", visitorUser);

module.exports = app;
