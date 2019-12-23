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
 * Handlers for the various types of data we want from the Sheets API
 * They should return parsed sheet data, rather than the raw response
 * from the API.
 */
// Fetches all services and updates global state. "redux-thunk" action.
export const getAllServices = () => async (dispatch: Function) => {
  let allServices = [];

  // Dispatch Loading action
  dispatch(getServicesLoading());

  try {
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
    allServices = getSheetData(allServicesRes.data);
  } catch (e) {
    // Dispatch a 'failure' action if the request failed
    return dispatch(getServicesError(DEFAULT_ERROR_MESSAGE));
  }

  // Dispatch services data
  dispatch(getServicesSuccess(allServices));
};

// Returns the spreadsheet's index sheet
export const getServicesIndex = () => async (dispatch: Function) => {
  dispatch(getServicesIndexLoading());
  try {
    const res = await getSheetByTitle("Index");
    return dispatch(getServicesIndexSuccess(getSheetData(res.data)));
  } catch (e) {
    return dispatch(getServicesIndexError(e));
  }
};

// Returns the spreadsheet's services by type
export const getServicesByType = () => async type => {
  const res = await getSheetByTitle(type);
  return getSheetData(res.data);
};

// Default error message
export { DEFAULT_ERROR_MESSAGE };

// getAllServices actions
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

// getServicesIndex actions
export const getServicesIndexSuccess = (payload: any) => ({
  type: "GET_SERVICES_INDEX_SUCCESS",
  payload,
  errorMessage: null,
});

export const getServicesIndexError = (errorMessage: string) => ({
  type: "GET_SERVICES_INDEX_ERROR",
  payload: null,
  errorMessage,
});

export const getServicesIndexLoading = () => ({
  type: "GET_SERVICES_INDEX_LOADING",
  payload: null,
  errorMessage: null,
});
