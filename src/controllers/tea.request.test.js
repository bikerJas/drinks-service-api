const request = require("supertest");
const app = require("../app");

describe("Test tea API endpoint request", () => {
  test("GET /tea should return correct object", async () => {
    const res = await request(app)
    .get("/tea")
    .query({ teaName: "Lemon" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Lemon",
    });
  });

  test("GET /tea should return correct object", async () => {
    const res = await request(app)
    .get("/tea")
    .query({ teaName: "EarlGrey" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "EarlGrey",
    });
  });

  test("GET /tea should return correct object", async () => {
    const res = await request(app)
    .get("/tea")
    .query({ teaName: "Peppermint" });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      drinkType: "Tea",
      name: "Peppermint",
    });
  });
});
