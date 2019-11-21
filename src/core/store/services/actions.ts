import axios from "axios";
import { getSheetData } from "~/core/utils";
import { stringify } from "qs";

const SHEET_ID =
  process.env.SHEET_ID || "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";
const API_KEY = process.env.GOOGLE_API_KEY;

const DEFAULT_ERROR_MESSAGE = "Something went wrong!";

// Create our API client and inject the API key into every request
const client = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/`,
  params: { key: API_KEY },
});

// Utility for fetching metadata about the sheets in the spreadsheet
const getSheetTitles = async () => {
  // sheetMetadata will be a list of sheets: { "sheets": [ { "properties": { "title": "Index" } }, ... ] }
  const sheetMetadata = await client.get("", {
    params: {
      fields: "sheets.properties.title",
    },
  });
  return sheetMetadata.data.sheets
    .map(sheet => sheet.properties.title)
    .filter(title => title !== "Index");
};

// Utility for fetching a single sheet from a spreadsheet by its title
const getSheetByTitle = async title =>
  await client.get("values:batchGet", {
    params: {
      majorDimension: "ROWS",
      ranges: title,
    },
  });

/**
 * Actions relating to fetching the google spreadsheet.
 */
export const getServicesSuccess = (payload: any) => ({
  type: "GET_SERVICES_SUCCESS",
  payload,
  errorMessage: null,
});

export const getServicesError = (errorMessage: string) => ({
  type: "GET_SERVICES_ERROR",
  payload: null,
  errorMessage,
});

export const getServicesLoading = () => ({
  type: "GET_SERVICES_LOADING",
  payload: null,
  errorMessage: null,
});

/**
 * Handlers for the various types of data we want from the Sheets API
 * They should return parsed sheet data, rather than the raw response
 * from the API.
 */
// Fetches all services and updates global state. "redux-thunk" action.
export const getAllServices = () => async (dispatch, getState) => {
  // Check if we have the google sheet
  const services = getState().services;
  if (services.data)
    return dispatch(getServicesError("Error: all services already loaded."));

  let allServices = [];

  try {
    dispatch(getServicesLoading());
    const types = await getSheetTitles();
    const allServicesRes = await client.get("values:batchGet", {
      params: {
        majorDimension: "ROWS",
        ranges: types,
      },
      paramsSerializer: params => {
        return stringify(params, { indices: false });
      },
    });
    allServices = allServicesRes.data.valueRanges.reduce((list, type) => {
      return [...list, ...type.values];
    }, []);
  } catch (e) {
    // Dispatch a 'failure' action if the request failed
    return dispatch(getServicesError(DEFAULT_ERROR_MESSAGE));
  }

  dispatch(getServicesSuccess(allServices));
};

export default {
  // Returns the spreadsheet's index sheet
  getIndex: async () => {
    const res = await getSheetByTitle("Index");
    return getSheetData(res.data);
  },
  // Returns a list of services for a given type
  getServicesByType: async type => {
    const res = await getSheetByTitle(type);
    return getSheetData(res.data);
  },
  DEFAULT_ERROR_MESSAGE,
};
