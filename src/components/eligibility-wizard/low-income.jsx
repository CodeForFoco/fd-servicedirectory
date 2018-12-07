import React from "react";
import { Link } from "@reach/router";
import { stringify } from "query-string";

const LowIncomeFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have low income?</h1>
      <nav>
        <Link to={`?${stringify({ ...appliedFilters, lowIncome: true })}`}>
          Yes
        </Link>
        <Link to={`?${stringify({ ...appliedFilters, lowIncome: true })}`}>
          No
        </Link>
      </nav>
    </article>
  );
};

export default LowIncomeFilter;
