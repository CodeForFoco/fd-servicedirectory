// Returns the rows of data from a sheet (excluding the header row)
export const getSheetData = sheet => {
  const items = sheet.valueRanges[0].values;
  // Remove the header row
  items.shift();
  return items;
};

/**
 * Formats a 'service' array from the API into a usable object
 *
 * Note: A fallback is required for the Phone # field because
 * the Sheets API omits the last column if there's no value.
 */
export const formatService = service => {
  // Split the comma separated populations into an array
  const populations = service[3] === "" ? [] : service[3].split(", ");
  return {
    address: service[12],
    description: service[5],
    hours: service[13],
    id: service[1],
    otherInfo: service[11],
    phone: service[14] || "",
    populations,
    subtype: service[2],
    title: service[4],
    type: service[0],
    requirements: {
      appointment: service[10] === "Y",
      id: service[6] === "Y",
      residency: service[7] === "Y",
      income: service[8] === "Y",
      lowIncome: service[9] === "Y",
    },
  };
};

// Returns the name for a requirement based on the requirement name and format
export const getRequirementName = ({ name, format = "expanded" }) =>
  ({
    id: { expanded: "Valid ID", compact: "ID" },
    residency: { expanded: "Proof of Residency", compact: "Residency" },
    income: { expanded: "Proof of Income", compact: "Income" },
    lowIncome: { expanded: "Proof of Low Income", compact: "Low Income" },
    appointment: { expanded: "Appointment Required", compact: "Appointment" },
  }[name][format]);

export const formatListAsSentence = items => {
  if (items.length === 1) {
    return items[0];
  }
  // Duplicate the array
  const newArr = [...items];
  const last = newArr.pop();
  return newArr.join(", ") + " & " + last;
};
