import React from "react";
import { Link } from "@reach/router";
import { stringify } from "query-string";

const IdFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have a valid ID?</h1>
      <nav>
        <Link to={`?${stringify({ ...appliedFilters, hasId: true })}`}>
          Yes
        </Link>
        <Link to={`?${stringify({ ...appliedFilters, hasId: false })}`}>
          No
        </Link>
      </nav>
      Need help getting an ID?
    </article>
  );
};

export default IdFilter;
