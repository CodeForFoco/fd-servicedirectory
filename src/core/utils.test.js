import * as utils from "./utils";

test("formatPhoneNumber", () => {
  const number = "555-123-4567";
  expect(utils.formatPhoneNumber(number)).toBe("(555) 123-4567");
});
