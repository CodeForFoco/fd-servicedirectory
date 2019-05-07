import React from "react";
import { useAPI } from "../../core/api";

const Categories = ({ match }) => {
  const { loading, error, data } = useAPI("values:batchGet", {
    params: { majorDimension: "ROWS", ranges: "Index" },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  // Grab the categories from the first cell of each row and remove duplicates
  const categories = [...new Set(data.map(row => row[0]))];

  return (
    <ul>
      {categories.map(c => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
};

export default Categories;
