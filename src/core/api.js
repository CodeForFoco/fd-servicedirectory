import axios from "axios";

const SHEET_ID = "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";
const API_KEY = "AIzaSyAjr82kfm5EIBgCTb5H3AE7tzGkBOBe1yo";

const client = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/`,
  params: { key: API_KEY },
});

const getSheetByTitle = async title => {
  const res = await client.get("values:batchGet", {
    params: {
      majorDimension: "ROWS",
      ranges: title,
    },
  });

  return res;
};

export default {
  getSpreadsheet: () => client.get(""),
  getSheetByTitle: title =>
    client.get("values:batchGet", {
      params: {
        majorDimension: "ROWS",
        ranges: title,
      },
    }),
  getServiceByID: async (typeId, serviceId) => {
    const sheet = await getSheetByTitle(typeId);
    const rows = sheet.data.valueRanges[0].values;

    const res = {};
    const headers = rows[0];
    //find the individual service row
    const service = rows.filter(row => row[0] === serviceId);

    //create response object with header key: value pairs
    headers.map((heading, index) => (res[heading] = service[0][index]));
    return res;
  },
};
