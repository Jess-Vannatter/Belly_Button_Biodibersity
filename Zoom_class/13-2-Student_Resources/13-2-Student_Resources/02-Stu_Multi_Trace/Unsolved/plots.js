console.log(data);

// Trace1 for the Greek Data
var trace1 = {
    x: data.map(data => data.pair),
    y:data.map(data => data.greekSearchResults),
    text: data.map(data => data.greekName),
    name: "Greek",
    type: "bar"

};

// Trace 2 for the Roman Data
var trace2 = {
    x: data.map(data => data.pair),
    y:data.map(data => data.romanSearchResults),
    text: data.map(data => data.romanName),
    name: "Roman",
    type: "bar"

};

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {barmode: 'group'};

// Render the plot to the div tag with id "plot"
plotly.newPLot("plot", data, layout);