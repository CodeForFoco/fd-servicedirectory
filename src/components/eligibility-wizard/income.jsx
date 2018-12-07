import React from "react";
import { Link } from "@reach/router";
import { stringify } from "query-string";

const IncomeFilter = ({ appliedFilters }) => {
  return (
    <article>
      <h1>Does this person have proof of income?</h1>
      <nav>
				<Link to={`?${stringify({ ...appliedFilters, income: true })}`}>
          Yes
        </Link>
				<Link to={`?${stringify({ ...appliedFilters, income: true })}`}>
          No
        </Link>
      </nav>
    </article>
  );
};

export default IncomeFilter;
