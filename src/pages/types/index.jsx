import React, { Fragment } from "react";
import styled from "styled-components";
import Loader from "~/components/loader";
import TitleBar from "~/components/title-bar";
import { useAPI } from "~/core/api";
import TypeCard from "./type-card";

const TopBar = styled(TitleBar)({});

const TypesList = styled.ul({
  height: "calc(100vh - 160px)",
  listStyle: "none",
  margin: 0,
  padding: "16px",
  overflowY: "scroll",
  webkitOverflowScrolling: "touch",
});

const Types = ({ match }) => {
  const { categoryId } = match.params;
  const { loading, error, data } = useAPI("values:batchGet", {
    params: { majorDimension: "ROWS", ranges: "Index" },
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Something went wrong!</p>;
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
      <TopBar backLink="/categories" title={currentCategory} />
      <TypesList>
        {types.map(t => (
          <TypeCard
            description={t.description}
            key={t.slug}
            link={t.slug}
            title={t.title}
          />
        ))}
      </TypesList>
    </Fragment>
  );
};

export default Types;
