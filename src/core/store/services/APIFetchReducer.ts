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

const APIFetchReducer = (state: iState, action: iAction) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FAILURE":
      return { ...state, loading: false, errorMessage: action.errorMessage };
    default:
      throw new Error();
  }
};

export default APIFetchReducer;
