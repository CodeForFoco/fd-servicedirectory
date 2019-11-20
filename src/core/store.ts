import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Temporary Reducer. Remove this.
const defaultReducer = (state, action) => {
  let newAction = action;
  Object.keys(newAction);
  return state;
};

export const configureStore = initialState => {
  return createStore(defaultReducer, initialState, applyMiddleware(thunk));
};
