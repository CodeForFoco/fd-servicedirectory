import React, { Component } from "react";
import api from "../core/api";
import { getSheetData, slugifyCategory } from "../core/utils";
import { Link } from "@reach/router";
import Box from "../components/box";

class Categories extends Component {
  state = {
    categories: [],
    isLoading: true,
  };

  async componentDidMount() {
    // Fetch the Index sheet and pull out the values
    const res = await api.getSheetByTitle("Index");
    const rawSheetData = getSheetData(res.data);

    // Grab the categories from each row
    const categories = rawSheetData.map(row => row[0]);

    // Converting the array to a Set and back will remove duplicate entries
    const dedupedCategories = [...new Set(categories)];

    this.setState({
      categories: dedupedCategories,
      isLoading: false,
    });
  }

  render() {
    const { categories, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <article>
        {categories.map(category => {
          // Convert a pretty category name to a uri slug
          const uri = slugifyCategory(category);
          return (
            <Box key={uri}>
              <Link to={`/${uri}`}>{category}</Link>
            </Box>
          );
        })}
      </article>
    );
  }
}

export default Categories;
