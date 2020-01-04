import Box from "~/components/box";
import Button from "~/components/button";
import Divider from "~/components/divider";
import Error from "~/components/error";
import { formatPhoneNumber } from "~/core/utils";
import Loader from "~/components/loader";
import PhysicalInfo from "~/components/physical-info";
import { P1, P2 } from "~/components/typography";
import React, { Fragment } from "react";
import Requirements from "~/components/requirements";
import styled from "styled-components";
import TitleBar from "~/components/title-bar";
import useServices from "~/core/api/services/useServices";

const ServiceCard = styled(Box)({
  margin: "72px 16px 0 16px",
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
  const { loading, errorMessage, data } = useServices();

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  const typeList = data.find(typeList => typeList[1].type === typeId);
  const service = typeList.find(service => service.id === serviceId);

  // If no service is found, show an empty state
  if (!service) {
    return <p>No service was found that matches this id!</p>;
  }

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
