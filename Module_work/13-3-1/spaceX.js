const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));


d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(LL => ({
        Latitude: LL.location.latitude,
        Longitude: LL.location.longitude}))));


