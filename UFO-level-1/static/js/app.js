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

// Created form id inside form tag in html
var form = d3.select("#form")


button.on("click", runDate);
form.on("submit",runDate);


function runDate() {



    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

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