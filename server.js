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
const VisitorData = require("./models/visitor.js");


global.index = 0;
let clientIp;
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config({ path: "./.env" });
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || SOME_PORT;

const root = path.join(__dirname, "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

app.use("/", userR);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.use("/", router);
router.post("/c", async (req, res) => {
  try {
    const clientIp = req.headers['x-real-ip'] || req.ip;
    const visitorUsers = await VisitorData.find({ name: clientIp });

    for (let visitor of visitorUsers) {
      const { name, count, firstUpdateTime, firstUpdateDate, lastUpdateTime, lastUpdateDate, country, region,
              timezone, city } = visitor;
      const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: `Visitor - ${name}`,
        html: `<p>Name: ${name}</p>
               <p>Count: ${count}</p>
               <p>First Update Time: ${firstUpdateTime}</p>
               <p>First Update Date: ${firstUpdateDate}</p>
               <p>Last Update Time: ${lastUpdateTime}</p>
               <p>Last Update Date: ${lastUpdateDate}</p>
               <p>Country: ${country}</p>
               <p>Region: ${region}</p>
               <p>Timezone: ${timezone}</p>
               <p>City: ${city}</p>`,
      };
      await contactEmail.sendMail(mail);
    }

    res.json({ code: 200, status: "Messages Sent" });
  } catch (error) {
    console.log(error);
    res.json({ code: 500, status: "Error Occurred" });
  }
});

app.use("/", router);
router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "You have new message - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

mongoose.set("strictQuery", true);

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

