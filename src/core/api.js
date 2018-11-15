import axios from "axios";

const SHEET_ID = "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";
const API_KEY = "AIzaSyAjr82kfm5EIBgCTb5H3AE7tzGkBOBe1yo";

const client = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/`,
  params: { key: API_KEY },
});

export default {
  getSpreadsheet: () => client.get(""),
  getSheetByTitle: title =>
    client.get("values:batchGet", {
      params: {
        majorDimension: "ROWS",
        ranges: title,
      },
    }),
};
