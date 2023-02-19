// Submit Button handler
function handleSubmit() {

  // Select the input value from the form
  var city = d3.select("#cityInput").node().value;

  // clear the input value
  d3.select("#cityInput").node().value = "";

  buildPlot(city);

}
  // Build the plot with the new stock
function buildPlot(city) {
  var apiKey = "d1513fc7707968da22881c77a2f06f07";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial` ;

  d3.json(url).then(function(data) {
    console.log(data)

    var times = data.list.map(x => x.dt_txt);
    var temp = data.list.map(x => x.main.temp);

    var trace1 = {
      x: times,
      y: temps,
      line: {
        color: "#FFCOCB",

      }};
    var data = [trace1];
    var layout = {
      title: `${city}: 5 Day Forcast`,
    };

    plotly.newPlot("plot", data, layout)
    })
  };
d3.select("#submit").on("click", handleSubmit)



function getTimes(owmData) {
  return owmData.list.map(x => x.dt_txt)
}

function getTemps(owmData) {
  return owmData.list.map(x => x.main.temp)
}

function buildPlot(city) {
  var apiKey = "d1513fc7707968da22881c77a2f06f07";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`

  d3.json(url).then(function(data) {
    console.log(data);

    times = getTimes(data);
    temps = getTemps(data);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      x: times,
      y: temps,
      line: {
        color: "#17BECF",
      }
    };

    var plotData = [trace1];

    var layout = {
      title: `${data.city.name} 5-day forecast`,
    };

    Plotly.newPlot("plot", plotData, layout);
  })
}

// Add event listener for submit button
// @TODO: YOUR CODE HERE
