import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllServices, getServicesIndex } from "./actions";

/**
 * Hook to use all services data. Service data is parsed into an object.
 * For example, { loading, errorMessage, data: {...} }
 * See ~/core/interfaces/formattedService.ts for more info.
 */
export const useServices = () => {
  const services = useSelector(state => state.services);
  const dispatch = useDispatch();

  // FETCH DATA 3 ATTEMPTS WHENEVER data = null && loading = false
  useEffect(() => {
    // Do not make additional requests for services.
    if (services && services.data) return;
    dispatch(getAllServices());
  }, []);

  return services;
};

/**
 * Hook to fetch index sheet data. Used to define categories.
 */
export const useServicesIndex = () => {
  const { loading = false, errorMessage = null, data = null } = useSelector(
    state => state.servicesIndex
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Don't make additional requests.
    if (data) return;
    dispatch(getServicesIndex());
  }, []);

  return { loading, errorMessage, data };
};

/**
 * Hooks for Categories, Types, and Services pages.
 * Lifecycle:
 * 1. GET all google sheets
 * 2. Store globally in array
 * 3. Hooks pull their data from the array
 */

// Returns a list of categories
export const useCategories = () => {};

// Returns a list of subtypes for a category
//export const useSubTypes = category => {};

// Returns a list of services for a subtype
//export const useSubTypeServices = subtype => {};

export default useServices;
