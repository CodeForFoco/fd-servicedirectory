import React, { Fragment } from "react";
import styled from "styled-components";
import Logo from "~/components/logo";
import Loader from "~/components/loader";
import Error from "~/components/error";
import { H1 } from "~/components/typography";
import api, { useAPI } from "~/core/api";
import theme from "~/core/theme";
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

// Transforms the data into usable objects and filter out duplicates
const getCategories = data => {
  const categoriesBySlug = {};
  data.forEach(([title, slug, description, icon, color]) => {
    const existingCategory = categoriesBySlug[slug];
    const category = {
      color,
      description,
      icon,
      slug,
      title,
    };
    if (theme.colors[color] === undefined) {
      console.warn(`Unknown icon color: ${color}`);
    }
    if (!existingCategory) {
      categoriesBySlug[slug] = category;
    } else {
      // Check for duplicate values; warn if we see them
      ["title", "description", "icon", "color"].forEach(fieldName => {
        const existingVal = existingCategory[fieldName];
        const val = category[fieldName];
        if (existingVal !== val) {
          console.warn(
            `Entries with category slug ${slug} have different ${fieldName} values: ${existingVal} and ${val}`
          );
        }
      });
    }
  });
  return Object.values(categoriesBySlug);
};

const Categories = () => {
  const { loading, errorMessage, data } = useAPI(api.getIndex);

  if (errorMessage) {
    return <Error {...{ errorMessage }} />;
  }

  return (
    <Fragment>
      <StyledLogo />
      <IntroText>Pick a category to see services in your area.</IntroText>
      {loading ? (
        <Loader />
      ) : (
        <CategoryList>
          {getCategories(data).map(c => (
            <CategoryCard key={c.slug} {...c} />
          ))}
        </CategoryList>
      )}
    </Fragment>
  );
};

export default Categories;
