// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");


// First, clear out any existing data
tbody.html('');
// Next, loop through each object in the data
// and append a row and cells for each value in the row
// Append a row to the table body
// Loop through each field in the dataRow and add
// each value as a table cell (td)
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Keep Track of all filters

var button = d3.select("#filter-btn");
var form = d3.select("#form")

button.on("click", updateFilters);
form.on("submit",updateFilters);

var inputs = d3.selectAll(".form-control");

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

// Create a function to update filters

function updateFilters() {

    d3.event.preventDefault();


    d3.selectAll(".form-control").on("click", function () {
        var inputbox = d3.select(this);
        var inputboxText = inputbox.property("value");
        console.log(inputboxText);

    });
    

};


  // Save the element, value, and id of the filter that was changed
  

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  };
 
 
  
  


  // Call function to apply all filters and rebuild the table


// Create a function to filter the table

  // Set the filteredData to the tableData

  // Loop through all of the filters and keep any data that
  // matches the filter values
  
  // Finally, rebuild the table using the filtered Data
  

// Attach an event to listen for changes to each filter

// Build the table when the page loads