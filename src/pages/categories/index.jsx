import React, { Fragment } from "react";
import useServicesIndex from "~/core/api/services/useServicesIndex";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import Error from "~/components/error";
import { H1 } from "~/components/typography";
import CategoryCard from "./category-card";

const StyledLogo = styled(Logo)({
  margin: "48px auto",
});

const CategoryList = styled.ul({
  listStyle: "none",
  marginTop: "40px",
  padding: "0 16px",
});

const IntroText = styled(H1)({
  color: "#44474F",
  padding: "0 32px",
  textAlign: "center",
});

// Transforms the data into usable objects and filter out duplicates
const getCategories = data =>
  Object.values(
    data.reduce((categories, [title, slug, description, icon, color]) => {
      categories[slug] = categories[slug] || {
        color,
        description,
        icon,
        slug,
        title,
      };
      return categories;
    }, {})
  );

const Categories = () => {
  const { loading, errorMessage, data } = useServicesIndex();

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Pick a category to see services in your area.</IntroText>
      {loading || !data ? (
        <Loader />
      ) : (
        <CategoryList>
          {getCategories(data).map(category => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </CategoryList>
      )}
    </Fragment>
  );
};

export default Categories;
