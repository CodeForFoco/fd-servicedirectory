import React, { Component } from "react";
import api from "../core/api";
import { getSheetData, slugifyCategory } from "../core/utils";
import { Link } from "@reach/router";

class Categories extends Component {
  state = {
    isLoading: true,
    serviceTypes: [],
  };

  async componentDidMount() {
    // Fetch the Index sheet and pull out the values
    const res = await api.getSheetByTitle("Index");
    const rawSheetData = getSheetData(res.data);

    // Get all the types in a usable format and filter to the ones in this category
    const serviceTypes = rawSheetData
      .map(row => ({
        category: slugifyCategory(row[0]),
        name: row[1],
        slug: row[2],
      }))
      .filter(service => service.category === this.props.categoryId);

    console.log("props", this.props);

    this.setState({
      isLoading: false,
      serviceTypes,
    });
  }

  render() {
    const { serviceTypes, isLoading } = this.state;
    const { uri } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <article>
        <ul>
          {serviceTypes.map(type => (
            <li key={type.slug}>
              <Link to={`${uri}/${type.slug}`}>{type.name}</Link>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Categories;
