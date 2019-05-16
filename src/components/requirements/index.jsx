import React, { Fragment } from "react";
import styled from "styled-components";
import Divider from "~/components/divider";
import Token from "~/components/token";
import { B2 } from "~/components/typography";
import { formatListAsSentence, getRequirementName } from "~/core/utils";

const List = styled.ul(({ isCompact }) => ({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: isCompact ? 0 : "8px 0 0 0",
  padding: 0,
}));

const Item = styled(Token).attrs({
  as: "li",
})({
  margin: "0 8px 8px 0",
});

const Requirements = ({ isCompact, populations, requirements }) => {
  // Filter out all requirements that don't apply and return their ids
  const visibleRequirements = Object.entries(requirements)
    .filter(r => r[1] === true)
    .reduce((reqs, r) => {
      /**
       * If the service requires Proof of Low Income, we can
       * assume that it also requires Proof of Income and
       * omit that requirement from the visible list.
       */
      if (r[0] === "income" && requirements.lowIncome) {
        return reqs;
      }
      // Otherwise, return the id of the requirement
      return [...reqs, r[0]];
    }, []);

  // If no requirements and all populations are served, hide this section
  if (visibleRequirements.length === 0 && populations.length === 0) {
    return null;
  }

  // Use the correct token label format
  const tokenFormat = isCompact ? "compact" : "expanded";

  return (
    <Fragment>
      <Divider />
      {!isCompact && <B2>Requirements:</B2>}
      <List isCompact={isCompact}>
        {visibleRequirements.map(r => {
          const color = r === "appointment" ? "fire" : "water";
          return (
            <Item color={color} key={r}>
              {getRequirementName({ name: r, format: tokenFormat })}
            </Item>
          );
        })}
        {populations.length !== 0 && (
          <Token>{formatListAsSentence(populations)}</Token>
        )}
      </List>
    </Fragment>
  );
};

export default Requirements;
