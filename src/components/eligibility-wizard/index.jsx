import React from "react";
import IncomeFilter from "./income";
import HasIdFilter from "./has-id";
import LowIncomeFilter from "./low-income";
import PopulationFilter from "./population";
import ResidencyFilter from "./residency";

const EligibilityWizard = ({ appliedFilters }) => {
  if (!("hasId" in appliedFilters)) {
    return <HasIdFilter appliedFilters={appliedFilters} />;
  }
  if (!("income" in appliedFilters)) {
    return <IncomeFilter appliedFilters={appliedFilters} />;
  }
  if (!("lowIncome" in appliedFilters)) {
    return <LowIncomeFilter appliedFilters={appliedFilters} />;
  }
  if (!("residency" in appliedFilters)) {
    return <ResidencyFilter appliedFilters={appliedFilters} />;
  }
  if (!("population" in appliedFilters)) {
    return <PopulationFilter appliedFilters={appliedFilters} />;
  }
  return null;
};

export default EligibilityWizard;
