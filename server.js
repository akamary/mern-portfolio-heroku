const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = express.Router();
const path = require("node:path");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const userR = require("./routes/visitor.js");
const requestIp = require("request-ip");
const app = express();
const geoip = require("geoip-lite");
const rou = require("./routes/sendEmail.js");


global.index = 0;
//let clientIp;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: "./.env" });
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

const root = path.join(__dirname, "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
  console.log(process.env.EMAIL_USER);

app.use("/", userR);
app.use("/", rou);
//app.use("/contact", rou);




