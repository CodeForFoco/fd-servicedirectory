import React from "react";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

const ResidencyFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have proof of residency?</h1>
      <nav>
        <Link
          to={{ search: stringify({ ...appliedFilters, residency: true }) }}
        >
          Yes
        </Link>
        <Link
          to={{ search: stringify({ ...appliedFilters, residency: false }) }}
        >
          No
        </Link>
      </nav>
    </article>
  );
};

export default ResidencyFilter;
