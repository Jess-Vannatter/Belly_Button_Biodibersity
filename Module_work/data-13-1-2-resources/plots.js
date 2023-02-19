///Created basic line charts 
// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// Plotly.newPlot("areaPlot", [{x:[50,100,150, 200], y:[100,200,300,400]}]);

///Created basic Bar charts
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

///Layout/ formatting of charts 
//  var layout = {
//     title: "Lunch Survey", 
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
//  };

//  Plotly.newPlot("plotArea", [trace], layout);


///making pie charts
// var trace = {
//     lables: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//     };
//     var data = [trace];
//     var layout = {
//     title: "'Pie' Chart", 
//     };
//     Plotly.newPlot("plotArea", data, layout);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//     "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Pie' Chart",
//    };
//    Plotly.newPlot("plotArea", data, layout);


///making scatter plots
var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter'
};
var trace2 = {
    x: [2, 3, 4, 5],
    y: [16, 5, 11, 9],
    mode: 'lines',
    type: 'scatter'
};
var trace3 = {
    x: [1, 2, 3, 4],
    y: [12, 9, 15, 12],
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

var layout = {
    title: "Scatter Plot",
};

Plotly.newPlot("plotArea", data);

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 15, 13, 17],
//     mode: 'markers',
//     type: 'scatter'
//   };
  
//   var trace2 = {
//     x: [2, 3, 4, 5],
//     y: [16, 5, 11, 9],
//     mode: 'lines',
//     type: 'scatter'
//   };
  
//   var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [12, 9, 15, 12],
//     mode: 'lines+markers',
//     type: 'scatter'
//   };
  
//   var data = [trace1, trace2, trace3];
  
//   Plotly.newPlot('plotArea', data);