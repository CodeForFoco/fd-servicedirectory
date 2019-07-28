import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import InputAndSubmit from "~/components/inputAndSubmit";
import { H1 } from "~/components/typography";
import api, { useAPI } from "~/core/api";
import ServiceCard from "~/pages/services/service-card";
import { formatService } from "~/core/utils";

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

const SearchResultsWrapper = styled.div({
  padding: "0px 16px 88px 16px"
});

const dataToIdIndexPairs = (data) => {
  let myData = data.concat();
  myData.shift();
  return myData.map(service => {
    // Type, subtype, population, service provider, service description
    let index = service + service[2] + service[3] + service[4] + service[5];
    let id = service[1];
    return { id, index };
  });
}

const queryServices = (data, query) => {
  let idIndexPairs = dataToIdIndexPairs(data);
  let regex = new RegExp(query, "gi");
  let indexOfMatches = [];
  idIndexPairs.forEach((pair, i) => {
    if (regex.test(pair.index)) {
      // + 1 accounts for row removed in dataToIdIndexPairs()
      indexOfMatches.push(i + 1);
    }
  });

  let matches = [];
  indexOfMatches.forEach(rowIndex => {
    matches.push(data[rowIndex]);
  });
  return matches;
}

const Search = ({ match }) => {
  const { loading, error, data } = useAPI(api.getAllServices);
  const index = useAPI(api.getIndex);
  const urlQuery = new URLSearchParams(location.search);

  const [searchValue, setSearchValue] = useState(urlQuery.get("s") || "");
  const [searchResults, setSearchResults] = useState("");

  if (error || index.error) {
    return <p>Something went wrong!</p>;
  }

  if (!loading && !index.loading && !searchResults && urlQuery.get("s") && urlQuery.get("s") !== '') {
    setSearchResults(queryServices(data, searchValue));
  }

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Search for a service.</IntroText>
      <AlignInput>
        <InputAndSubmit
          value={searchValue}
          inputPlaceholder="Search for a service"
          submitValue="Search"
          setValue={(e) => {
            setSearchValue(e.target.value);
          }}
          handleSubmit={() => {
            if (loading || index.loading) { return; }
            setSearchResults(queryServices(data, searchValue));
          }}
        />
      </AlignInput>
      {loading || index.loading ? (
        <Loader />
      ) : (
        <SearchResultsWrapper>
          {searchResults && searchResults.length > 0 ? searchResults.map((service, i) => {
            let myService = formatService(service);
            let link = "/categories/";
            index.data.forEach(category => {
              if (myService.type === category[6]) {
                link += category[1];
                return;
              }
            });
            link += `/${myService.type}/${myService.id}?backLink=/search?s=${searchValue}`;
            return <ServiceCard link={link} service={myService} key={'search-' + i + service[1]}/>
          }): ''}
        </SearchResultsWrapper>
      )}
    </Fragment>
  );
};

export default Search;