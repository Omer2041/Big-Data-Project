require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes.js");
const mongodb = require("./models/mongo.js");
const kafkaConsumer = require("./models/kafkaConsumer");
const PORT = process.env.PORT || 4000;

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from Batch Layer" });
});

app.use("/api", routes.routes);

kafkaConsumer.on("data", function (msg) {
  console.log(m.value.toString());
  mongodb.saveToDB(JSON.parse(msg.value));
  console.log("Document Added Succesfully To MongoDB");
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
