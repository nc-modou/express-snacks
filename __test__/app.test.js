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
  test("Should return an object when passed a valid id", () => {
    return request(app)
      .get("/api/snacks/2")
      .expect(200)
      .then((result) => {
        expect(result).toMatchObject({
          name: "Kit Kats",
          description: "Have a break, have a kit kat",
        });
      });
  });
});
