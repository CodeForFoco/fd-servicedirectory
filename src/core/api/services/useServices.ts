import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stringify } from "qs";
import { formatService } from "~core/utils";

import { ActionRequest, Request, FormattedService } from "~/types/services";
import { axiosClient as client, DEFAULT_ERROR_MESSAGE } from "~/core/constants";

export const useServices = (): Request => {
  const services = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!services || !services.data) {
      dispatch(getAllServices);
    }
  }, []);

  return services;
};

const getAllServices = async (dispatch: Function) => {
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

    dispatch(
      getServicesSuccess(
        allServicesRes.data.valueRanges.reduce((list, type) => {
          // Remove "Types, Id, etc..." row from service
          type.values.shift();

          return [...list, type.values.map(service => formatService(service))];
        }, [])
      )
    );
  } catch (e) {
    return dispatch(getServicesError(DEFAULT_ERROR_MESSAGE));
  }
};

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

// Reducer that handles state for the useAPI hook
export const getServicesReducer = (
  state: Request = { loading: true, errorMessage: null, data: null },
  action: ActionRequest
) => {
  switch (action.type) {
    case "GET_SERVICES_LOADING":
      return { ...state, loading: true, data: null, errorMessage: null };
    case "GET_SERVICES_ERROR":
      return {
        loading: false,
        data: null,
        errorMessage: action.errorMessage,
      };
    case "GET_SERVICES_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export const getServicesSuccess = (payload: FormattedService[][]) => ({
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

export default useServices;
