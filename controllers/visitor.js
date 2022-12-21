const VisitorData = require("./../models/visitor.js");
const geoip = require("geoip-lite");
const requestIp = require("request-ip");

const visitorUser = async (req, res) => {
  let clientIp = req.headers["x-forwarded-for"];
  let today = new Date();
  //let clientIp = req.headers["x-real-ip"];
  let ip = clientIp;
  const geo = geoip.lookup(ip);
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  // full date format dd/mm/yyyy
  let dateUpdate = date + "/" + month + "/" + year;

  let hour = today.getHours() + 2;
  let minutes = today.getMinutes();
  let secs = today.getSeconds();
  // full time format hh:mm:ss
  let todayUpdate = hour + ":" + minutes + ":" + secs;
  global.index++;
  let visitors = await VisitorData.findOne({ name: clientIp });
  if (visitors == null) {
    const beginCount = new VisitorData({
      name: clientIp,
      count: 1,
      firstUpdateTime: todayUpdate,
      firstUpdateDate: dateUpdate,
      lastUpdateTime: todayUpdate,
      lastUpdateDate: dateUpdate,
      // country: geo.country,
      // region: geo.region,
      // timezone: geo.timezone,
      // city: geo.city,
    });
    try {
      await beginCount.save();
    } catch (e) {
      console.log("error");
    }
  } else {
    visitors.count += 1;
    visitors.lastUpdateTime = todayUpdate;
    visitors.lastUpdateDate = dateUpdate;
    try {
      await visitors.save();
      console.log("visitor arrived: ", visitors.count);
    } catch (e) {
      console.log("error");
    }
  }
};

module.exports = visitorUser;
