// Reducer that handles state for the useAPI hook
export default (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FAILURE":
      return { ...state, loading: false, errorMessage: action.errorMessage };
    default:
      throw new Error();
  }
};
