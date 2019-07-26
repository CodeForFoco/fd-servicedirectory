import React, { Fragment, useMemo } from "react";
import Fuse from "fuse.js";

const Results = ({ data, query }) => {
  const index = useMemo(
    () =>
      new Fuse(data, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ["description", "subtype", "title"],
      }),
    [data]
  );

  if (query === "") {
    return <p>Start typing to see results</p>;
  }

  const results = index.search(query);

  return (
    <Fragment>
      <ul>
        {results.map(d => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default React.memo(Results);
