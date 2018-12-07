import React from "react";
import { Link } from "@reach/router";
import { stringify } from "query-string";

const ResidencyFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have proof of residency?</h1>
      <nav>
        <Link to={`?${stringify({ ...appliedFilters, residency: true })}`}>
          Yes
        </Link>
        <Link to={`?${stringify({ ...appliedFilters, residency: true })}`}>
          No
        </Link>
      </nav>
    </article>
  );
};

export default ResidencyFilter;
