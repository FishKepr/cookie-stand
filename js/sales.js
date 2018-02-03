'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var hourlyTotal = [];
var totalForDay = 0;

//Function to create location object
function LocationObject (name, minCust, maxCust,avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.hourlySales = [];
  this.salesForDay = 0;
  this.loadHourlySales = function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<hours.length; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay += this.hourlySales[i];
      //If this is the first location, initialize the array field
      if (isNaN(hourlyTotal[i])) {
        hourlyTotal[i] = 0;
      }
      //Add Hourly Sales to total for hour and total for day
      hourlyTotal[i] += this.hourlySales[i];
      totalForDay += this.hourlySales[i];
    }

  };
  //Call method to create and load hourly sales
  this.loadHourlySales();
  //Call function to Build and append table row
  appendLine(this.name, this.hourlySales,this.salesForDay);
}

//Common Functions

//Loads Detail line to table
function appendLine(name, hourlySales,salesForDay){

  //Load Location Name
  var salesTable = document.getElementById('salesTable');

  //Append Location Detail Line to table
  //Need both Table Row AND Table Header for each detail line
  startNewTableRow(salesTable,name);

  //Loop Through and append Hours per Location
  var tdEl;
  for (var i=0; i<hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = hourlySales[i];
    salesTable.appendChild(tdEl);
  }
  //Append Total Sales for Location
  tdEl = document.createElement('td');
  tdEl.textContent = salesForDay;
  salesTable.appendChild(tdEl);
}

//Generates Random Number of Customers
function getRandomCustomerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//Creates Table Footer
function createFooter(){
  //Insert Table Footer row as child of Sales Table
  //Give it an attribute ID so we can delete it when adding a new location
  var tfEl = document.createElement('tfoot');
  tfEl.setAttribute('id', 'tableFooter');
  salesTable.appendChild(tfEl);

  //Associate the other row elements to tableFooter so we can delete the entire row when adding a new location

  //Insert Table row element as child of Table Footer
  var tableFooter = document.getElementById('tableFooter');
  startNewTableRow(tableFooter,'Total for Hour');

  //Insert hourly totals for location as of Table Footer
  for (var i=0; i<hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hourlyTotal[i];
    tableFooter.appendChild(tdEl);
  }

  //Insert Total for day for the location as child to footer
  thEl = document.createElement('th');
  thEl.textContent = totalForDay;
  tableFooter.appendChild(thEl);
}

// This function handles the addition of a new location
function handleNewLocation(event) {
  event.preventDefault(); //prevents page reload

  //Retrieve values from form
  var locName = event.target.locName.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgSale = parseFloat(event.target.avgSale.value);

  //Verify that we have valid values, Exit if error
  //Required field validation now handled by HTML5
  //if (!locName || !minCust || !maxCust || !avgSale) {
  //  return alert('Must enter a value in each field!');
  //}
  if (minCust > maxCust) {
    return alert('Minimum Customers must be less than or equal to Maximum.');
  }

  //Retrieve Table and Footer elements
  var salesTable = document.getElementById('salesTable');
  var tableFooter = document.getElementById('tableFooter');

  //Remove the existing footer row
  salesTable.removeChild(tableFooter);

  //Create and append new Location Object
  new LocationObject(locName,minCust, maxCust, avgSale);

  //Rebuild new Table Footer
  createFooter();

  //Clear form Entries
  event.target.locName.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgSale.value = null;
}

//This function starts a new table row and appends the first two elements to the parent parameter.
function startNewTableRow(parent,headerContent) {
  //Need both Table Row AND Table Header for each detail line
  var trEl = document.createElement('tr');
  parent.appendChild(trEl);

  //Insert table row header as child of Table Footer
  var thEl = document.createElement('th');
  thEl.textContent = headerContent;
  parent.appendChild(thEl);
}

//********   Mainline Starts Here   ********

//Create Table Header
var salesTable = document.getElementById('salesTable');
var thEl;
startNewTableRow(salesTable,'');

//Append Hours Array
for (var i=0; i<hours.length; i++) {
  thEl = document.createElement('th');
  thEl.textContent = hours[i];
  salesTable.appendChild(thEl);
}

thEl = document.createElement('th');
thEl.textContent = 'Total';
salesTable.appendChild(thEl);

//Create pre-assigned locations
var fandp = new LocationObject("First and Pike", 23, 65, 6.3);
var seatac = new LocationObject("SeaTac Airport", 3, 24, 1.2);
var seattleCenter = new LocationObject("Seattle Center", 11, 38, 3.7);
var capitolHill = new LocationObject("Capitol Hill", 20, 38, 2.3);
var alki = new LocationObject("Alki", 2, 16, 4.6);

//Create Table Footer
createFooter();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
var newLocation = document.getElementById('new-location');
newLocation.addEventListener('submit', handleNewLocation);