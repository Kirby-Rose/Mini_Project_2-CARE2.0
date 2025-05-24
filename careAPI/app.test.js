// app.test.js
// import supertest and the express app
const request = require("supertest");
const app = require("./app");
const { addition } = require("./controllers/calculatorController");

describe("user routes", () => {
  test("GET /user => get list of current users", () => {
    return request(app)
      .get(`/user`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          id: 1,
          name: "Anthony Albanese",
          country: "AU",
        });
      });
  });

  test("GET /user/:id => get specific user from list", () => {
    return request(app)
      .get(`/user/1`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          result: { id: 1, name: "Anthony Albanese", country: "AU" },
        });
      });
  });

  test("GET /user/:id => get specific user from list", () => {
    return request(app)
      .get(`/user/1`)
      .expect(200)
      .then((response) => {
        console.log("response", response.body);
        expect(response.body).toEqual({
          result: { id: 1, name: "Anthony Albanese", country: "AU" },
        });
      });
  });
});
