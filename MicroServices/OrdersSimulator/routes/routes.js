const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/startSimulator", controller.startSimulator);
router.get("/stopSimulator", controller.stopSimulator);

module.exports = {
  routes: router,
};
