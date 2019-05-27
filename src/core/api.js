import axios from "axios";
import { useEffect, useReducer } from "react";
import { getSheetData } from "./utils";
import { stringify } from "qs";

const SHEET_ID = "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";
const API_KEY = process.env.GOOGLE_API_KEY;

// Create our API client and inject the API key into every request
const client = axios.create({
  baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/`,
  params: { key: API_KEY },
});

// Utility for fetching a single sheet from a spreadsheet by its' title
const getSheetByTitle = async title =>
  await client.get("values:batchGet", {
    params: {
      majorDimension: "ROWS",
      ranges: title,
    },
  });

// Reducer that handles state for the useAPI hook
const APIFetchReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, loading: false, error: false, data: action.payload };
    case "FAILURE":
      return { ...state, loading: false, error: true };
    default:
      throw new Error();
  }
};

/**
 * This hook used by the pages to handle API requests.
 * It returns an object with the following keys:
 * { loading, error, data }
 */
export const useAPI = (fetcher, opts) => {
  // Create a reducer to store the status of the request
  const [state, dispatch] = useReducer(APIFetchReducer, {
    loading: true,
    error: false,
    data: {},
  });

  useEffect(() => {
    /**
     * didCancel is used if the component that made the request
     * is unmounted while the request is still in-flight.
     */
    let didCancel = false;
    // Async fn to fetch the requested resource
    const fetchData = async () => {
      try {
        const data = await fetcher(opts);
        if (!didCancel) {
          // Dispatch a 'success' action if the request succeeded
          dispatch({ type: "SUCCESS", payload: data });
        }
      } catch (e) {
        if (!didCancel) {
          // Dispatch a 'failure' action if the request failed
          dispatch({ type: "FAILURE" });
        }
      }
    };
    // Run our asnyc fn!
    fetchData();
    // If the component unmounts, set didCancel
    return () => {
      didCancel = true;
    };
  }, []);
  // Return the current state of the reducer
  return state;
};

/**
 * Handlers for the various types of data we want from the Sheets API
 * They should return parsed sheet data, rather than the raw response
 * from the API.
 */
export default {
  // Returns *all* services as a single array—for use in search
  getAllServices: async () => {
    const index = await getSheetByTitle("Index");
    const types = getSheetData(index.data).map(row => row[6]);
    const allServicesRes = await client.get("values:batchGet", {
      params: {
        majorDimension: "ROWS",
        ranges: types,
      },
      paramsSerializer: params => {
        return stringify(params, { indices: false });
      },
    });
    const allServices = allServicesRes.data.valueRanges.reduce((list, type) => {
      return [...list, ...type.values];
    }, []);
    return allServices;
  },
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
};
