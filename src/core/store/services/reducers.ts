// Reducer that handles state for the useAPI hook
interface iAction {
  type: string;
  payload: any;
  errorMessage: string;
}

interface iState {
  loading: boolean;
  errorMessage: string;
  data: any;
}

const getServicesReducer = (state: iState, action: iAction) => {
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
      throw new Error();
  }
};

export default getServicesReducer;
