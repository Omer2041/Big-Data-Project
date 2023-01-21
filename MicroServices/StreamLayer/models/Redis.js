require("dotenv").config();
const initialData = require("./initial_data");
const { createClient } = require("redis");
const redis = createClient();

// Cloud Redis:
//   host: process.env.REDIS_CLOUD_HOST,
//   port: 18003,
//   password: process.env.REDIS_CLOUD_PASSWORD,

// Docker Image Redis:
//   port: 6379, // Redis port
//   host: "127.0.0.1", // Redis host

redis
  .on("connect", function () {
    console.log("Reciever connected to Redis in port: 6379");
  })
  .on("error", function (err) {
    console.log("Error " + err);
  });

(async () => {
  await redis.connect();
  if (await redis.exists("orders_data")) {
    const ordersData = await redis.json.GET("orders_data");
    console.log(ordersData);
  } else {
    redis.json.SET("orders_data", "$", initialData);
    const expireToday = parseInt(new Date().setHours(23, 59, 59, 999) / 1000);
    redis.EXPIREAT("orders_data", expireToday);
    console.log("Data Initialized");
  }
})();

module.exports = redis;
