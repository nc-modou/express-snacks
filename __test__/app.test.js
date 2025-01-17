const app = require("../app");
const request = require("supertest");
const db = require("../db");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");

afterAll(() => {
  return db.end();
});

beforeEach(() => {
  return seed(data);
});

// "/api/snacks/:id"

describe("GET snacks", () => {
  test("Should return an object when passed a valid id", () => {});
});
