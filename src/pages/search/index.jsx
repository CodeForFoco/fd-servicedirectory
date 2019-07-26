import { parse, stringify } from "qs";
import React, { Fragment } from "react";
import api, { useAPI } from "~/core/api";
import Results from "./results";

const Search = ({ history, location }) => {
  const { loading, error, data } = useAPI(api.getAllServices);
  const { q = "" } = parse(location.search, { ignoreQueryPrefix: true });
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  const handleSearch = e => {
    if (e.target.value === "") {
      history.replace("/search");
    } else {
      history.replace(`/search?${stringify({ q: e.target.value })}`);
    }
  };

  return (
    <Fragment>
      <input type="text" onChange={handleSearch} value={q} />
      <Results data={data} query={q} />
    </Fragment>
  );
};

export default Search;
