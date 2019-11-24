import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  getServicesReducer as services,
  getServicesIndex as servicesIndex,
} from "~/core/store/services/reducers";

const reducers = combineReducers({
  services,
  servicesIndex,
});

export const configureStore = initialState => {
  return createStore(reducers, initialState, applyMiddleware(thunk));
};

export const initializeStore = () => {
  // State is intialized per reducer
  return configureStore({});
};
