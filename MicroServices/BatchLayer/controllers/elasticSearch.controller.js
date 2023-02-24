const { searchDocuments } = require("../models/elasticSearch");

const getOrdersByDate = async (req, res) => {
  let orders = req.query.hasOwnProperty("branch")
    ? await searchDocuments(req.query)
    : await searchDocuments();
  orders = orders.map((item) => {
    return {
      branch: item.branch,
      date: item.date,
      time: item.time,
      handleDuration: item.handle_time,
      amount: item.amount,
      mushrooms: item.toppings.includes("mushrooms") ? 1 : 0,
      onion: item.toppings.includes("onion") ? 1 : 0,
      olives: item.toppings.includes("olives") ? 1 : 0,
      corn: item.toppings.includes("corn") ? 1 : 0,
      tomato: item.toppings.includes("tomato") ? 1 : 0,
    };
  });
  res.send(orders);
};

module.exports = { getOrdersByDate };
