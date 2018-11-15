import slugify from "slugify";

// Returns a list of sheet titles from a Google Spreadsheet
export const getSheetTitles = spreadsheet =>
  spreadsheet.sheets.map(sheet => sheet.properties.title);

// Returns the rows of data from a sheet (excluding the header row)
export const getSheetData = sheet => {
  const items = sheet.valueRanges[0].values;
  items.shift();
  return items;
};

export const normalizeServices = rawServices =>
  rawServices.map(service => ({
    id: service[0],
    subType: service[1],
    populationServed: service[2],
    name: service[3],
    description: service[4],
    requirements: {
      id: service[5] === "Y",
      residency: service[6] === "Y",
      proofOfIncome: service[7] === "Y",
      lowIncome: service[8] === "Y",
      other: service[9],
    },
    address: service[10],
    hours: service[11],
    phone: service[12],
  }));

// Converts a natural language string to a uri slug
export const slugifyCategory = name => slugify(name, { lower: true });
