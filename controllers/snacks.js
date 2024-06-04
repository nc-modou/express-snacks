// Controller functions here!
// invokes the model, manages the request

const fetchSnack = require("../models/snacks");

const getSnack = (req, res, next) => {
  const snackId = req.params.id;

  fetchSnack(snackId).then((response) => {
    res.status(200).send()
  })
};

module.exports = {getSnack};
