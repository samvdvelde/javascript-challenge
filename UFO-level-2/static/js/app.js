// from data.js
var tableData = data;


//Append UFO sighting data to table

var tbody = d3.select("tbody");


tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});



var button = d3.select("#filter-btn");

var form = d3.select("#form")


button.on("click", runFilter);
form.on("submit",runFilter);


function runFilter() {



    d3.event.preventDefault();

    var dateElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var stateElement = d3.select("#state");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");

    var dateValue = dateElement.property("value");
    var cityValue = cityElement.property("value");
    var stateValue = stateElement.property("value");
    var countryValue = countryElement.property("value");
    var shapeValue = shapeElement.property("value");


    


    var filteredData = tableData.filter(sighting => sighting.datetime === dateValue || dateValue === "")
                                .filter(sighting => sighting.city === cityValue || cityValue === "")
                                .filter(sighting => sighting.state === stateValue || stateValue === "")
                                .filter(sighting => sighting.country === countryValue || countryValue === "")
                                .filter(sighting => sighting.shape === shapeValue || shapeValue === "");

    console.log(filteredData);

    //Clear existing table

    tbody.html('');

    //Fill table with filtered data

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

};