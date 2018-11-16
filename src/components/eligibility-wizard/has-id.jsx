import React from "react";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

const IdFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have a valid ID?</h1>
      <nav>
        <Link to={{ search: stringify({ ...appliedFilters, hasId: true }) }}>
          Yes
        </Link>
        <Link to={{ search: stringify({ ...appliedFilters, hasId: false }) }}>
          No
        </Link>
      </nav>
      Need help getting an ID?
    </article>
  );
};

export default IdFilter;
