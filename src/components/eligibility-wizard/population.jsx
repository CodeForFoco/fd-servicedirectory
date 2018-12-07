import React, { Component } from "react";
import { stringify } from "query-string";
import { navigate } from "@reach/router";

class PopulationFilter extends Component {
  state = {
    selectedPopulations: [],
  };

  applyFilter = () => {
    const { appliedFilters } = this.props;
    const { selectedPopulations } = this.state;

    navigate(
      `?${stringify({
        ...appliedFilters,
        population: selectedPopulations,
      })}`
    );
  };

  togglePopulation = e => {
    const selectedPopulation = e.target.value;
    this.setState(prevState => {
      if (!prevState.selectedPopulations.includes(selectedPopulation)) {
        return {
          ...prevState,
          selectedPopulations: [
            ...prevState.selectedPopulations,
            selectedPopulation,
          ],
        };
      }

      return {
        ...prevState,
        selectedPopulations: prevState.selectedPopulations.filter(
          p => p !== selectedPopulation
        ),
      };
    });
  };

  render() {
    const { selectedPopulations } = this.state;

    return (
      <article>
        <h1>Are they part of these groups? (check all that apply)</h1>
        <ul>
          <li>
            <label>
              <input
                value="OlderAdults"
                type="checkbox"
                checked={selectedPopulations.includes("OlderAdults")}
                onChange={this.togglePopulation}
              />
              Older Adults
            </label>
          </li>
          <li>
            <label>
              <input
                value="Veterans"
                type="checkbox"
                checked={selectedPopulations.includes("Veterans")}
                onChange={this.togglePopulation}
              />
              Veterans
            </label>
          </li>
          <li>
            <label>
              <input
                value="Kids"
                type="checkbox"
                checked={selectedPopulations.includes("Kids")}
                onChange={this.togglePopulation}
              />
              Kids
            </label>
          </li>
          <li>
            <label>
              <input
                value="IntellectuallyDisabled"
                type="checkbox"
                checked={selectedPopulations.includes("IntellectuallyDisabled")}
                onChange={this.togglePopulation}
              />
              Intellectual/Developmentally Disabled
            </label>
          </li>
          <li>
            <label>
              <input
                value="Homeless"
                type="checkbox"
                checked={selectedPopulations.includes("Homeless")}
                onChange={this.togglePopulation}
              />
              Homeless
            </label>
          </li>
          <li>
            <label>
              <input
                value="PhysicalDisability"
                type="checkbox"
                checked={selectedPopulations.includes("PhysicalDisability")}
                onChange={this.togglePopulation}
              />
              Physical Disability
            </label>
          </li>
          <li>
            <label>
              <input
                value="Caregivers"
                type="checkbox"
                checked={selectedPopulations.includes("Caregivers")}
                onChange={this.togglePopulation}
              />
              Caregivers
            </label>
          </li>
        </ul>
        <button
          disabled={selectedPopulations.length === 0}
          onClick={this.applyFilter}
        >
          Continue
        </button>
      </article>
    );
  }
}

export default PopulationFilter;
