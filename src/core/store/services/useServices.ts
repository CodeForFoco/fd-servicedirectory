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

  // Equivilent to componentDidMount
  useEffect(() => {
    // Do not make additional requests for services.
    if (services.data) return;
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

export default useServices;
