const express = require("express");
const router = express.Router();
const controller = require("../controllers/bigMLcontroller");

router.get("/buildModel", controller.buildModel);

module.exports = {
  routes: router,
};
