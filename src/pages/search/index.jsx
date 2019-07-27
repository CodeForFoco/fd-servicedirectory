import { uniqBy } from "lodash";
import React, { Fragment } from "react";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import { H1 } from "~/components/typography";
import api, { useAPI } from "~/core/api";

const StyledLogo = styled(Logo)({
  margin: "48px auto",
});

const CategoryList = styled.ul({
  listStyle: "none",
  margin: "40px 0 0 0",
  padding: "16px",
});

const IntroText = styled(H1)({
  color: "#44474F",
  padding: "0 32px",
  textAlign: "center",
});

// Transforms the data into usable objects and filter out duplicates
const getCategories = data =>
  uniqBy(
    data.map(d => ({
      color: d[4],
      description: d[2],
      icon: d[3],
      title: d[0],
      slug: d[1],
    })),
    "label"
  );

const query = new URLSearchParams(location.search);

const Search = ({ match }) => {
  const { loading, error, data } = useAPI(api.getIndex);

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Search for a service.</IntroText>
      {/*query.get('name')*/}
      {/*loading ? (
        <Loader />
      ) : (
        <p>{JSON.stringify(data)}</p>
      )*/}
    </Fragment>
  );
};

export default Search;