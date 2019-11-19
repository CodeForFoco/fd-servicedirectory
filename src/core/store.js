import React, { useReducer } from "react";
import APIFetchReducer from "~/core/reducers/APIFetchReducer";

// Context allows us to use state outside of a
// component hierarchy (think redux).
export const Store = React.createContext({});

// Initialize Global state
const initialState = {
  googleSheet: {
    loading: false,
    error: null,
    data: null,
  },
};

// To Do: Create combineReducers functionality
const combineReducers = (state, action) => {
  return APIFetchReducer(state, action);
};

// Allows us to use the following syntax in a component:
// const { state, dispatch } = useContext(Store);
export const StoreProvider = props => {
  const [state, dispatch] = useReducer(combineReducers, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
