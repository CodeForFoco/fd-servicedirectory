import Error from "~/components/error";
import Loader from "~/components/loader";
import React, { Fragment } from "react";
import ServiceCard from "~/pages/services/service-card";
import styled from "styled-components";
import TitleBar from "~/components/title-bar";
import useServices from "~/core/api/services/useServices";

const ServicesList = styled.ul({
  listStyle: "none",
  marginTop: "72px",
  padding: "0 16px",
});

const Services = ({ match }) => {
  const { categoryId, typeId } = match.params;
  const { loading, errorMessage, data } = useServices();

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  // Get my services
  const myServices = getMyServices(data, typeId);

  if (!myServices || myServices.length === 0) {
    return <p>No services were found for this type!</p>;
  }

  return (
    <Fragment>
      <TitleBar
        backLink={`/categories/${categoryId}`}
        title={`${typeId} (${myServices.length})`}
      />
      <ServicesList>
        {myServices.map(s => (
          <ServiceCard
            link={`/categories/${categoryId}/${typeId}/${s.id}`}
            key={s.id}
            service={s}
          />
        ))}
      </ServicesList>
    </Fragment>
  );
};

const getMyServices = (allTypes, myType) => {
  let myServices = [];

  allTypes.forEach(services => {
    if (services[1].type === myType) {
      myServices = services;
    }
  });

  return myServices;
};

export default Services;
