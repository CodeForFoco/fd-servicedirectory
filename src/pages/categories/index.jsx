import { uniqBy } from "lodash";
import React, { Fragment } from "react";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import { H1 } from "~/components/typography";
import { useAPI } from "~/core/api";
import CategoryCard from "./category-card";

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

const Categories = () => {
  const { loading, error, data } = useAPI("values:batchGet", {
    params: { majorDimension: "ROWS", ranges: "Index" },
  });

  if (error) {
    return <p>Something went wrong!</p>;
  }

  // Transforms the data into usable objects and filter out duplicates
  const getCategories = data =>
    uniqBy(
      data.map(d => ({
        description: d[2],
        icon: d[3],
        title: d[0],
        slug: d[1],
      })),
      "label"
    );

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Pick a category to see services in your area.</IntroText>
      {loading ? (
        <Loader />
      ) : (
        <CategoryList>
          {getCategories(data).map(c => (
            <CategoryCard
              description={c.description}
              link={c.slug}
              key={c.slug}
              title={c.title}
            />
          ))}
        </CategoryList>
      )}
    </Fragment>
  );
};

export default Categories;
