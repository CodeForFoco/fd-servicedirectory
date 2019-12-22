import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllServices, getServicesIndex } from "./actions";

import { asyncState } from "~/types/asyncAction";
import { formattedService } from "~/types/formattedService";

export const useServices = (): formattedService[] => {
  const services = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    if (services && services.data) return;
    dispatch(getAllServices());
  }, []);

  return services;
};

export const useServicesIndex = (): asyncState => {
  const dispatch = useDispatch();
  const { loading, errorMessage, data } = useSelector(
    state => state.servicesIndex
  );

  useEffect(() => {
    if (data) return;
    dispatch(getServicesIndex());
  }, []);

  return { loading, errorMessage, data };
};

export default useServices;
