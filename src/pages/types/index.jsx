import React, { Fragment } from "react";
import styled from "styled-components";
import Loader from "~/components/loader";
import Error from "~/components/error";
import TitleBar from "~/components/title-bar";
import api, { useAPI } from "~/core/api";
import TypeCard from "./type-card";

const TypesList = styled.ul({
  listStyle: "none",
  margin: "72px 0 104px 0",
  padding: "0 16px",
});

const Types = ({ match }) => {
  const { categoryId } = match.params;
  const { loading, errorMessage, data } = useAPI(api.getIndex);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  const types = data
    .filter(d => d[1] === categoryId)
    .map(d => ({
      category: d[0],
      description: d[7],
      title: d[5],
      slug: d[6],
    }));

  if (types.length === 0) {
    return <p>No types were found for this category!</p>;
  }

  const currentCategory = types[0].category;

  return (
    <Fragment>
      <TitleBar backLink="/categories" title={currentCategory} />
      <TypesList>
        {types.map(t => (
          <TypeCard
            description={t.description}
            key={t.slug}
            link={`/categories/${categoryId}/${t.slug}`}
            title={t.title}
          />
        ))}
      </TypesList>
    </Fragment>
  );
};

export default Types;
