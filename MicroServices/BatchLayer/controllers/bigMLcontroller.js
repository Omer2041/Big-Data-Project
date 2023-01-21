// const MongoClient = require("mongodb").MongoClient();
// const client = new MongoClient()
// require("dotenv").config({ path: "../.env" });
const jsonfile = require("jsonfile");
const { getOrders } = require("../models/mongo");
const bigml = require("bigml");

const connection = new bigml.BigML();
var source = new bigml.Source();
let modelData = {};

const buildModel = async (req, res) => {
  const orders = await getOrders();
  console.log(orders);
  try {
    // await jsonfile.writeFile("./OrdersData.json", orders, { spaces: 2 });
    // return new Promise((resolve, reject) => {
    //   resolve(true);
    // });
  } catch (error) {
    console.log(error);
  }

  // source.create("../OrdersData.json", function (error, sourceInfo) {
  //   if (!error && sourceInfo) {
  //     var dataset = new bigml.Dataset();
  //     dataset.create(sourceInfo, function (error, datasetInfo) {
  //       if (!error && datasetInfo) {
  //         var model = new bigml.Model();
  //         model.create(datasetInfo, function (error, modelInfo) {
  //           if (!error && modelInfo) {
  //             var prediction = new bigml.Prediction();
  //             prediction.create(modelInfo, { "petal length": 1 });
  //           }
  //         });
  //       }
  //     });
  //   }
  // });
};

module.exports = { buildModel };
