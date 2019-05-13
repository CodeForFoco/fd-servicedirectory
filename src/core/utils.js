// Returns the rows of data from a sheet (excluding the header row)
export const getSheetData = sheet => {
  const items = sheet.valueRanges[0].values;
  // Remove the header row
  items.shift();
  return items;
};
