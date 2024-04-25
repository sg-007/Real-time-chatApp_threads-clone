import cron from "cron";
import https from "https"

const URL = "https://threads-clone-r4cp.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
    https.get(URL, (res) => {
        if (res.statusCode === 200) {
            console.log("GET request send successfully")
        }
        else {
            console.log("GET request faild", res.statusCode)
        }
    })
    .on("error", (e) => {
        console.error("Error while sending request", e)
    })
});

export default job;

// cron jobs are scheduled tasks that run periodically at fixed intervals or at a specific time
// send 1 GET request every 14 minutes

// Schedule:
// you define a schedule using a cron expression, which consists of five fields representing:

//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

//EXAMPLE
//* 30 3 15 * * - At 3:30 AM, on the 15th of every month