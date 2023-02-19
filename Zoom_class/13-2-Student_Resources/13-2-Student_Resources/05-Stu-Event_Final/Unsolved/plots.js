// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var lables = Object.keys(data.us)

// Display the default plot
function init() {
  data = [{
    lables: us,
    valuesz: lables,
    type:'pie'
  }];

  var layout = {
    height: 600,
    width: 800
  };
  plotly.newPlot("pie", data, layout);
};


// On change to the DOM, call getData()
d3.selectAll("#selectDataset").on("change", updateData);
// Function called by DOM changes
function updateData() {
  var dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable

  // Initialize an empty array for the country's data


// Update the restyled plot's values
