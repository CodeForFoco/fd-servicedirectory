import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import InputAndSubmit from "~/components/inputAndSubmit";
import { H1 } from "~/components/typography";
import api, { useAPI } from "~/core/api";

const StyledLogo = styled(Logo)({
  margin: "48px auto",
});

const IntroText = styled(H1)({
  color: "#44474F",
  padding: "0 32px",
  textAlign: "center",
});

const AlignInput = styled.div({
  display: "flex",
  justifyContent: "center",
  padding: "8px 16px"
});

const query = new URLSearchParams(location.search);

const Search = ({ match }) => {
  const { loading, error, data } = useAPI(api.getAllServices);

  const [state, setState] = useState({
    searchValue: ""
  });

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Search for a service.</IntroText>
      <AlignInput>
        <InputAndSubmit
          value={state.searchValue}
          inputPlaceholder="Search for a service"
          submitValue="Search"
          setValue={(e) => {
            setState({ searchValue: e.target.value });
          }}
        />
      </AlignInput>
      {loading ? (
        <Loader />
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </Fragment>
  );
};

export default Search;