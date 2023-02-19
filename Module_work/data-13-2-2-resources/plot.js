// //console.log(cityGrowths);

// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// var topFiveCities = sortedCities.slice(0,5);

// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// // console.log(topFiveCityNames);
// // console.log(topFiveCityGrowths);

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);


  
var sortedCities = cityGrowths.sort((a,b) =>
a.population - b.population).reverse(); 

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPopulations = topSevenCities.map(city => parseInt(city.population));

// console.log(topSevenCityNames);
// console.log(topSevenCityPopulations);

var trace = {
    x: topSevenCityNames,
    y: topSevenCityPopulations,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "City Populations",
    xaxis: {title: "City" },
    yaxis: {title: "Populations, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);