import axios from "axios";

export const API_KEY = process.env.GOOGLE_API_KEY;
export const DEFAULT_ERROR_MESSAGE = "Something went wrong!";
export const INDEX_SHEET_TITLE = "Index";
export const SHEET_ID =
  process.env.SHEET_ID || "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";

// Create our API client and inject the API key into every request
export const axiosClient = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/`,
  params: { key: API_KEY },
});
