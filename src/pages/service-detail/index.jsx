import React, { Fragment } from "react";
import styled from "styled-components";
import Box from "~/components/box";
import Button from "~/components/button";
import Divider from "~/components/divider";
import Loader from "~/components/loader";
import Error from "~/components/error";
import PhysicalInfo from "~/components/physical-info";
import Requirements from "~/components/requirements";
import TitleBar from "~/components/title-bar";
import { P1, P2 } from "~/components/typography";
import api, { useAPI } from "~/core/api";
import { formatPhoneNumber, formatService } from "~/core/utils";

const ServiceCard = styled(Box)({
  margin: "72px 16px 104px 16px",
});

const Description = styled(P1)({
  color: "#44474F",
});

const OtherInfo = styled(P2)({
  color: "#44474F",
});

const PhoneLink = styled.a({
  display: "block",
  margin: "8px 0 16px 0",
  textDecoration: "none",
});

const ServiceDetail = ({ match }) => {
  const { categoryId, serviceId, typeId } = match.params;

  const { loading, errorMessage, data } = useAPI(api.getServicesByType, typeId);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  const serviceRow = data.find(d => d[1] === serviceId);

  // If no service is found, show an empty state
  if (!serviceRow) {
    return <p>No service was found that matches this id!</p>;
  }

  // Format the service into a useful object
  const service = formatService(serviceRow);

  return (
    <Fragment>
      <TitleBar
        backLink={
          new URLSearchParams(location.search).get("backLink") ||
          `/categories/${categoryId}/${typeId}`
        }
        title={service.title}
      />
      <ServiceCard>
        <Description>{service.description}</Description>
        <PhysicalInfo address={service.address} hours={service.hours} />
        <Requirements
          requirements={service.requirements}
          populations={service.populations}
        />
        {service.phone !== "" && (
          <PhoneLink href={`tel:${service.phone}`}>
            <Button>{formatPhoneNumber(service.phone)}</Button>
          </PhoneLink>
        )}
        {service.otherInfo && (
          <Fragment>
            <Divider />
            <OtherInfo>{service.otherInfo}</OtherInfo>
          </Fragment>
        )}
      </ServiceCard>
    </Fragment>
  );
};

export default ServiceDetail;
