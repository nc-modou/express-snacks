const db = require("../db");

// Model functions here!

const fetchSnack = (snackId) => {
  return db.query(
    `
  SELECT * FROM snacks
  WHERE id = $1
  `,
    [snackId]
  );
  // access the fulfilment of the promise with .then
  // it will resolve with a rows array
  // we'd access rows[0] as there's only one object we're after
};

module.exports = { fetchSnack };
