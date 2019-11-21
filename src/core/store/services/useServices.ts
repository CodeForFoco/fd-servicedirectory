import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllServices } from "./actions";

/**
 * Hook to use all services data. Service data is parsed into an object.
 * Services object: { loading, errorMessage, data }
 */
const useServices = () => {
  const services = useSelector(state => state.services);
  const dispatch = useDispatch();

  // Equivilent to componentDidMount
  useEffect(() => {
    if (services.data) return;
    dispatch(getAllServices());
  }, []);

  return services;
};

export default useServices;
