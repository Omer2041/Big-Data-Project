require("dotenv").config();
const jsonfile = require("jsonfile");
const { getOrders } = require("../models/mongo");
const bigml = require("bigml");

const username = process.env.BIGML_USERNAME;
const apiKey = process.env.BIGML_API_KEY;
const connection = new bigml.BigML(username, apiKey);
// console.log(connection);
var source = new bigml.Source();

const buildModel = async (req, res) => {
  console.log(req.query);
  let orders = await getOrders(req.query);
  orders = orders.map((item) => {
    return item.toppings;
  });
  // jsonfile.writeFile("./OrdersData.json", orders, (err) => {
  //   if (err) console.error(err);
  //   console.log("Write Completed!");
  // });
  // console.log(orders);
  
  // Create source from data
  source.create("./OrdersData.json", function (error, sourceInfo) {
    if (!error && sourceInfo) {
      var dataset = new bigml.Dataset();
      dataset.create(sourceInfo, function (error, datasetInfo) {
        if (!error && datasetInfo) {
          var association = new bigml.Association();
          association.create(datasetInfo, function (error, associationInfo) {
            if (!error && associationInfo) {
              association.list(associationInfo, (error, rulesInfo) => {
                if (!error && rulesInfo) {
                  console.log(rulesInfo);
                } else {
                  console.error(error);
                }
              });
            }
          });
        }
      });
    }
  });
  // res.send({ message: "SUCCESS" });
};

module.exports = { buildModel };
