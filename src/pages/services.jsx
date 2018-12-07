import React, { Component } from "react";
import api from "../core/api";
import { getSheetData, normalizeServices } from "../core/utils";
import { Link } from "@reach/router";
import { parse } from "query-string";
import { areAllFiltersSet } from "../core/filters";
import EligibilityWizard from "../components/eligibility-wizard";

class Categories extends Component {
  state = {
    isLoading: true,
    services: [],
  };

  async componentDidMount() {
    // Fetch the sheet  matching the service type id and pull out the values
    const res = await api.getSheetByTitle(this.props.typeId);
    const rawSheetData = getSheetData(res.data);
    const services = normalizeServices(rawSheetData);
    this.setState({
      isLoading: false,
      services,
    });
  }

  render() {
    const { services, isLoading } = this.state;
    const { uri, location } = this.props;
    const appliedFilters = parse(location.search);

    if (!areAllFiltersSet(appliedFilters)) {
      return <EligibilityWizard appliedFilters={appliedFilters} />;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <article>
        <ul>
          {services.map(service => (
            <li key={service.id}>
              <Link to={`${uri}/${service.id}`}>{service.name}</Link>
              <p>{service.address}</p>
            </li>
          ))}
        </ul>
      </article>
    );
  }
}

export default Categories;
