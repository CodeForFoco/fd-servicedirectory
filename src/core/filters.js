export const areAllFiltersSet = q =>
  "income" in q &&
  "lowIncome" in q &&
  "hasId" in q &&
  "residency" in q &&
  "population" in q;
