const fs = require("fs");

// LOG FUNCTION FOR LOGGING REQUESTS TO JSON FILE
const logRequests = (url,status) => {

    // Get current time for log operations
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

    return fs.writeFile(
    `logFile.json`,
    `\n{"Request Url": "${url}"\n"Response": "${status}"\n"Request Time": "${dateTime}"}\n`,
    { flag: "a" },
    (err) => {
      if (err) console.log(err);
    }
  )};

  module.exports = logRequests;
