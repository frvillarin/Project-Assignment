import { sort, search, newsList } from "./main.js";

//Example testing for search function
test("Search function testing", () => {
  expect(search(newsList)).toBe("What films should an aspiring journalist watch?");
});
