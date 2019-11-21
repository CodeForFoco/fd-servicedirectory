import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import services from "~/core/store/services/reducers";

const reducers = combineReducers({
  services,
});

export const configureStore = initialState => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};

export const initializeStore = () => {
  // State is intialized per reducer
  return configureStore({});
};
