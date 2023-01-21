const kafkaProducer = require("../models/kafkaProducer");
const { generateOrder, generateBranchEvent } = require("../models/simulator");
let interval = -1;
let ordersRate = 2;
let eventsRate = 3;

const startSimulator = (req, res) => {
  clearInterval(interval);
  interval = setInterval(() => {
    kafkaProducer.publish(generateOrder(), "orders");
  }, ordersRate * 1000);

  interval = setInterval(() => {
    kafkaProducer.publish(generateBranchEvent(), "events");
  }, eventsRate * 1000);
  const response = `Simulator is Running.
  Orders Rate: message per ${ordersRate} Seconds.
  Events Rate: message per ${eventsRate} Seconds.`;
  console.log(response);
  res.send(response);
};

const stopSimulator = (req, res) => {
  clearInterval(interval);
  console.log("Simulator Stopped");
  res.send("Simulator Stopped");
};
module.exports = { startSimulator, stopSimulator };
