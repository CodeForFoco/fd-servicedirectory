import React, { Fragment } from "react";
import styled from "styled-components";
import Divider from "~/components/divider";
import { P3 } from "~/components/typography";

const Table = styled.figure({
  display: "grid",
  gridTemplateColumns: "25% auto",
  gridRowGap: "12px",
  margin: 0,
  padding: 0,
});

const Label = styled(P3).attrs({
  as: "span",
})({
  color: "#1B1B1B",
  display: "block",
  fontWeight: 500,
});

const Value = styled(P3).attrs({
  as: "span",
})({
  color: "#696C72",
  display: "block",
});

const PhysicalInfo = ({ address, hours }) => {
  const hasAddress = address !== "";
  const hasHours = hours !== "";

  // If the service has no address or hours, don't show this section!
  if (!hasAddress && !hasHours) {
    return null;
  }

  return (
    <Fragment>
      <Divider />
      <Table>
        {hasAddress && (
          <Fragment>
            <Label>Address</Label>
            <Value>{address}</Value>
          </Fragment>
        )}
        {hasHours && (
          <Fragment>
            <Label>Hours</Label>
            <Value>{hours}</Value>
          </Fragment>
        )}
      </Table>
    </Fragment>
  );
};

export default PhysicalInfo;
