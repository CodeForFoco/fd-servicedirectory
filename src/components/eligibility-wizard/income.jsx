import React from "react";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

const IncomeFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have proof of income?</h1>
      <nav>
        <Link to={{ search: stringify({ ...appliedFilters, income: true }) }}>
          Yes
        </Link>
        <Link to={{ search: stringify({ ...appliedFilters, income: false }) }}>
          No
        </Link>
      </nav>
    </article>
  );
};

export default IncomeFilter;
