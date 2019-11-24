import { asyncState, asyncAction } from "~/core/interfaces/asyncAction";

// Reducer that handles state for the useAPI hook
export const getServicesReducer = (
  state: asyncState = { loading: false, errorMessage: null, data: null },
  action: asyncAction
) => {
  switch (action.type) {
    case "GET_SERVICES_LOADING":
      return { ...state, loading: false, data: null, errorMessage: null };
    case "GET_SERVICES_ERROR":
      return {
        ...state,
        loading: false,
        data: null,
        errorMessage: action.errorMessage,
      };
    case "GET_SERVICES_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export const getServicesIndex = (
  state: asyncState = { loading: false, errorMessage: null, data: null },
  action: asyncAction
) => {
  switch (action.type) {
    case "GET_SERVICES_INDEX_LOADING":
      return { ...state, loading: false, data: null, errorMessage: null };
    case "GET_SERVICES_INDEX_ERROR":
      return {
        ...state,
        loading: false,
        data: null,
        errorMessage: action.errorMessage,
      };
    case "GET_SERVICES_INDEX_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default getServicesReducer;
