console.log("app.js loaded");

// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function init() {
    tableData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

var button = d3.select("#filter-btn");
var form = d3.select("#form");

function runEnter(event) {
    d3.event.preventDefault();    

    var inputText = d3.select("#datetime");

    var inputDate = inputText.property("value");
    var defaultDate = inputText.property("placeholder");
    
    if (inputDate === "") {
        var filteredData = tableData.filter(sighting => sighting.datetime != defaultDate);
    }
    else {
        var filteredData = tableData.filter(sighting => sighting.datetime === inputDate);
    }    
    
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

button.on("click", runEnter);
form.on("submit", runEnter);

init();
