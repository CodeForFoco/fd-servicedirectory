import React, { Fragment } from "react";
import styled from "styled-components";
import Loader from "~/components/loader";
import Error from "~/components/error";
import TitleBar from "~/components/title-bar";
import TypeCard from "./type-card";
import { useServicesIndex } from "~/core/store/services/useServices";

const TypesList = styled.ul({
  listStyle: "none",
  marginTop: "72px",
  padding: "0 16px",
});

const Types = ({ match }) => {
  const { loading, errorMessage, data } = useServicesIndex();
  const { categoryId } = match.params;

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
