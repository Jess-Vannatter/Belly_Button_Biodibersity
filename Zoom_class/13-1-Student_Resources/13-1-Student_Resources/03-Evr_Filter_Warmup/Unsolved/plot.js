// Filter the data for movies with an IMDb rating greater than 8.9
//  and then graph each title on the x-axis and the respective metascore on the y-axis.

// 1. Use the filter method to create a custom filtering function
//  that returns the movies with a rating greater than 8.9

function filterMovieRatings(movie) {
    return movie.imdbRating > 8.9;
}

// 2. Use filter() to pass the function as its argument
var filteredMovies = topMovies.filter(filterMovieratings);

//  Check to make sure your are filtering your movies.
console.log(filteredMovies);
// 3. Use the map method with the arrow function to return all the filtered movie titles.
var titles = filteredMovies.map(movies => movies.title);

//  Check your filtered movie titles.
console.log(titles);
// 4. Use the map method with the arrow function to return all the filtered movie metascores.
var meta = filteredMovies.map(movies => movies.metascore);
//  Check your filtered movie metascores.
console.log(meta);
// 5. Create your trace.
var trace = {
    x: titles,
    y: meta,
    type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
    title: "top rated films",
    xaxis: {title: "movie name"},
    yaxis: {title: "MetaScore"}
};

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);