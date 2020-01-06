import * as React from "react";
import { render } from "@testing-library/react";

import MockApp from "~/core/test-wrapper";
import CategoryCard from "~/pages/categories/category-card";

const props = {
  color: "blue",
  description: "The world says hello!",
  icon: "home",
  slug: "what-the-heck",
  title: "Hello World",
};

test("Category Card - Displays title & description", async () => {
  const { getByText } = render(
    <MockApp>
      <CategoryCard {...props} />
    </MockApp>
  );

  expect(getByText(props.title)).toBeTruthy();
  expect(getByText(props.description)).toBeTruthy();
});
