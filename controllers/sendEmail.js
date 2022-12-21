const nodemailer = require("nodemailer");
const express = require("express");
const requestIp = require("request-ip");
const geoip = require("geoip-lite");
const path = require("node:path");
const dotenv = require("dotenv").config({ path: __dirname + "./../.env" });
const app = express();


const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("error here");
  } else {
    console.log("Ready to Send");
  }
});

const sendEmail = async (req, res) => {
  clientIp = requestIp.getClientIp(req);
  let ip = clientIp;
  const geo = geoip.lookup(ip);
  const name = "new user";
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: "New Visitor - " + `${clientIp}`,
    html: `<p> New Visitor arrived: ${index} </p>`,
  };
  await contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json("error here");
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
};

const contactMe = async (req, res) => {
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
  await contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json("error here 2");
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
};
module.exports = { sendEmail, contactMe };
