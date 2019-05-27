import * as utils from "./utils";

test("getSheetData", () => {
  const sheet = {
    valueRanges: [{ values: [['header fields'], ['row 1'], ['row 2']]}]
  };
  expect(utils.getSheetData(sheet)[0][0]).toBe('row 1'); 
});

test("formatService", () => {
  const service = [0, 1, 2, 'Food, clothing, transit, and housing', 4, 5, "Y", "Y", "Y", "Y", "N", 11, 12, 13, 14];
  const expected = {
    address: 12,
    description: 5,
    hours: 13,
    id: 1,
    otherInfo: 11,
    phone: 14,
    populations: ['Food', 'clothing', 'transit', 'and housing'],
    subtype: 2,
    title: 4,
    type: 0,
    requirements: {
      appointment: false,
      id: true,
      residency: true,
      income: true,
      lowIncome: true,
    }
  };
  let formatted = utils.formatService(service);
  Object.keys(formatted.requirements).forEach(key => {
    expect(formatted.requirements[key]).toBe(expected.requirements[key]);
  });
  expect(formatted.populations).toEqual(expected.populations);
  Object.keys(expected).forEach(key => {
    if (key !== 'populations' && key !== 'requirements') {
      expect(formatted[key]).toEqual(expected[key]);
    }
  });
});

test("getRequirementName", () => {
  let compact = utils.getRequirementName({ name: 'id', format: 'compact' });
  let expanded = utils.getRequirementName({ name: 'id', format: 'expanded' });
  expect(compact).toBeTruthy();
  expect(expanded).toBeTruthy();
  expect(compact.length).toBeLessThan(expanded.length);
});

test("formatListAsSentence", () => {
  let format = utils.formatListAsSentence;
  expect(format(['item A'])).toBe('item A');
  expect(format(['A', 'B', 'C'])).toBe('A, B, & C');
});

test("formatPhoneNumber", () => {
  const number = "555-123-4567";
  expect(utils.formatPhoneNumber(number)).toBe("(555) 123-4567");
});

