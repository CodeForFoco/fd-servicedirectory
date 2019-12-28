import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { getServicesReducer as services } from "~core/api/services/useServices";
import { getServicesIndexReducer as servicesIndex } from "~core/api/services/useServicesIndex";

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
