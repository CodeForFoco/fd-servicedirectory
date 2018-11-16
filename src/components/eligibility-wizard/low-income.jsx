import React from "react";
import { Link } from "react-router-dom";
import { stringify } from "query-string";

const LowIncomeFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have low income?</h1>
      <nav>
        <Link
          to={{ search: stringify({ ...appliedFilters, lowIncome: true }) }}
        >
          Yes
        </Link>
        <Link
          to={{ search: stringify({ ...appliedFilters, lowIncome: false }) }}
        >
          No
        </Link>
      </nav>
    </article>
  );
};

export default LowIncomeFilter;
