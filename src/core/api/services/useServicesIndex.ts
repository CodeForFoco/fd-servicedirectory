import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSheetData } from "~/core/utils";

import { ActionRequest, Request } from "~/types/services";
import {
  axiosClient as client,
  DEFAULT_ERROR_MESSAGE,
  INDEX_SHEET_TITLE,
} from "~/core/constants";

const useServicesIndex = (): Request => {
  const servicesIndex = useSelector(state => state.servicesIndex);
  const dispatch = useDispatch();

  useEffect(() => {
    if (servicesIndex && servicesIndex.data) return;
    dispatch(getServicesIndex);
  }, []);

  return servicesIndex;
};

const getServicesIndex = async (dispatch: Function) => {
  dispatch(getServicesIndexLoading());

  try {
    const res = await getSheetByTitle(INDEX_SHEET_TITLE);
    dispatch(getServicesIndexSuccess(getSheetData(res.data)));
  } catch {
    dispatch(getServicesIndexError(DEFAULT_ERROR_MESSAGE));
  }
};

const getSheetByTitle = async title =>
  await client.get("values:batchGet", {
    params: {
      majorDimension: "ROWS",
      ranges: title,
    },
  });

export const getServicesIndexReducer = (
  state: Request = { loading: true, errorMessage: null, data: null },
  action: ActionRequest
) => {
  switch (action.type) {
    case "GET_SHEET_INDEX_SUCCESS":
      return { loading: false, data: action.payload, errorMessage: null };
    case "GET_SHEET_INDEX_ERROR":
      return { loading: false, data: null, errorMessage: action.errorMessage };
    case "GET_SHEET_INDEX_LOADING":
      return { loading: true, data: null, errorMessage: null };
    default:
      return state;
  }
};

export const getServicesIndexSuccess = (payload): ActionRequest => ({
  type: "GET_SHEET_INDEX_SUCCESS",
  payload,
});

export const getServicesIndexError = (errorMessage): ActionRequest => ({
  type: "GET_SHEET_INDEX_ERROR",
  errorMessage,
});

export const getServicesIndexLoading = (): ActionRequest => ({
  type: "GET_SHEET_INDEX_LOADING",
});

export default useServicesIndex;
