const format = require("pg-format");
const db = require("../../db");

const seed = async (snacksData) => {
  await db.query(`DROP TABLE IF EXISTS snacks;`);

  const insertSnacksQuery = format(
    "INSERT INTO snacks (name, description) VALUES %L RETURNING *;",
    snacksData.map(({ name, description }) => [name, description])
  );

  await db
    .query(
      `
    CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
  );`
    )
    .then(() => {
      return db.query(insertSnacksQuery);
    })
    .then((snacks) => {
      return snacks.rows;
    });
};

module.exports = seed;
