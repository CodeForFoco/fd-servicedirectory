import React, { Fragment } from "react";
import styled from "styled-components";
import Loader from "~/components/loader";
import TitleBar from "~/components/title-bar";
import { useAPI } from "~/core/api";
import { formatService } from "~/core/utils";
import ServiceCard from "./service-card";

const ServicesList = styled.ul({
  listStyle: "none",
  margin: "72px 0 104px 0",
  padding: "0 16px",
});

const Services = ({ match }) => {
  const { categoryId, typeId } = match.params;

  const { loading, error, data } = useAPI("values:batchGet", {
    params: { majorDimension: "ROWS", ranges: typeId },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  // Format services into useful objects
  const services = data.map(formatService);

  // If there are no services, show an empty state
  if (services.length === 0) {
    return <p>No types were found for this category!</p>;
  }

  // Grab the current type from the first service
  const currentType = services[0].type;

  return (
    <Fragment>
      <TitleBar
        backLink={`/categories/${categoryId}`}
        title={`${currentType} (${services.length})`}
      />
      <ServicesList>
        {services.map(s => (
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

export default Services;
