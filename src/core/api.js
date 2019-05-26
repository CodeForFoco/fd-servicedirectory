import axios from "axios";
import { useEffect, useReducer } from "react";
import { getSheetData } from "./utils";

const SHEET_ID = "1ZPRRR8T51Tk-Co8h_GBh3G_7P2F7ZrYxPQDSYycpCUg";
const API_KEY = process.env.GOOGLE_API_KEY;

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

export const useAPI = (url, opts) => {
  const [state, dispatch] = useReducer(APIFetchReducer, {
    loading: true,
    error: false,
    data: {},
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const res = await client.get(url, opts);
        const data = getSheetData(res.data);
        if (!didCancel) {
          dispatch({ type: "SUCCESS", payload: data });
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: "FAILURE" });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  return state;
};
