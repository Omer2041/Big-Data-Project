require("dotenv").config();
const { getOrders } = require("../models/mongo");
const bigml = require("bigml");
const { writeFileSync } = require("fs");
const jsonfile = require("jsonfile");

const connection = new bigml.BigML(
  process.env.BIGML_USERNAME,
  process.env.BIGML_API_KEY
);
const DATASET_PATH = "./toppingsDataset.csv";
const RESULTS_PATH = "./association_rules.json";


const buildModel = async (req, res) => {
  /* Prepare the Dataset */
  const orders = await getOrders(req.query); // Get all orders from MongoDB
  // const orders = fakeData; // Get all orders from MongoDB
  const toppings = orders?.map((order) => order.toppings);
  // console.log(toppings);
  saveAsCSV(toppings);

  /* Create the model */
  const source = new bigml.Source(connection);
  source.create(DATASET_PATH, function (error, sourceInfo) {
    if (error) {
      console.log("Error creating source");
      res.status(500).send({ message: 'Could not create data source' });
    }

    /* Source created successfully */
    console.log(`Source created: ${sourceInfo.resource}`);

    const dataset = new bigml.Dataset(connection);
    dataset.create(sourceInfo, function (error, datasetInfo) {
      if (error) {
        console.log("Error creating dataset");
        res.status(500).send({ message: 'Could not create dataset' });
      }

      /* Dataset created successfully */
      console.log(`Dataset created: ${datasetInfo.resource}`);
      const association = new bigml.Association(connection);

      association.create(
        datasetInfo,
        { search_strategy: "support" },
        function (error, associationInfo) {
          if (error) {
            console.log("Error creating association");
            res.status(500).send({ message: 'Could not create association from dataset' });
          }

          /* Association created successfully */
          console.log(`Association created: ${associationInfo.resource}`);
          getAssociationRules(associationInfo.resource, res);
        }
      );
    });
  });
};

const getAssociationRules = (associationId, res) => {
  const model = new bigml.Model(connection);
  model.get(associationId, true, (err, modelInfo) => {
    if (err) {
      console.log("Error getting model");
      res?.status(500)?.send({ message: "Error getting model" });
    }
    console.log(modelInfo);
    const rules = modelInfo.object.associations.rules;
    console.log("RULES: ", rules);
    if (!rules) {
      console.error(`No association rules were found (${associationId})`);
      res?.status(500)?.send({ message: `Association does not contain any rules (${associationId})` });
    }
    const items = modelInfo.object.associations.items;
    console.log("ITEMS: ", items);
    if (!items) {
      console.error(`No items found (${associationId})`);
     res?.status(500)?.send({ message: `Association does not contain any items (${associationId})` });
    }

    const sets = extractRules(rules, items);
    console.log(sets);
    res?.status(200).send(sets);
    
    jsonfile.writeFile(RESULTS_PATH, sets, { spaces: 2 }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Data written to file successfully!");
      }
    });

    console.log(
      "Finished building model, results were written to " + RESULTS_PATH
    );
  });
};

/**
 * @param rules - Rules object from BigML modelInfo object
 * @param items - Item set from BigML modelInfo object
 * @returns - An array containing association rules determined in the dataset by the model.
 */
const extractRules = (rules, items) => {
  const sets = [];
  for (let i = 0; i < rules.length; ++i) {
    const left = rules[i].lhs;
    const right = rules[i].rhs;
    let antecedents = "";
    let consequents = "";

    for (let item = 0; item < left.length; item++) {
      antecedents += items[left[item]].name;
      if (item < left.length - 1) antecedents += ", ";
    }
    for (let item = 0; item < right.length; item++) {
      consequents += items[right[item]].name;
      if (item < right.length - 1) consequents += ", ";
    }
    const support = rules[i].support[0] * 100 + "%";
    const confidence = rules[i].confidence * 100 + "%";
    const count = rules[i].support[1];
    sets.push({
      antecedent: antecedents,
      consequent: consequents,
      support: support,
      confidence: confidence,
      count: count,
    });
  }
  return sets;
};

const saveAsCSV = (data) => {
  console.log(`Writing dataset to ${DATASET_PATH}`);
  let dataset = "";
  data?.forEach((entry) => (dataset += entry.join(",") + "\n"));

  try {
    writeFileSync(DATASET_PATH, dataset);
    console.log("New dataset created");
  } catch (err) {
    console.error(err);
  }
};

/* Uncomment this function to test this module */
// (async () => {
//   await mongoose.connect(process.env.MONGO_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   });
//   await buildModel(undefined, undefined);
// })();

module.exports = { buildModel, getAssociationRules };
