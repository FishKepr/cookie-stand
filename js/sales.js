'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
      this.salesForDay+=this.hourlySales[i];
    }
  };
  this.render = function(){
  //Load Location Variables to HTML
    appendLine(this.name, this.hourlySales,this.salesForDay);
    
  };
}


//Common Functions

//Loads Detail line to table
function appendLine(name, hourlySales,salesForDay){
  //Load Location Variables to HTML
    
  //Load Location Name
  var salesTable = document.getElementById('salesTable');
  
  //Append Location Detail Line to table
  //Need both Table Row AND Table Header for each detail line
  var trEl = document.createElement('tr');
  salesTable.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = name;
  salesTable.appendChild(thEl);
  
  //Loop Through and append Hours per Location
  for (var i=0; i<hours.length; i++){
    var tdEl = document.createElement('td');
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

//********   Mainline Starts Here   ********

//Create Table Header
var salesTable = document.getElementById('salesTable');
var thEl = document.createElement('th');
salesTable.appendChild(thEl);

for (var i=0; i<hours.length; i++) {
  thEl = document.createElement('th');
  thEl.textContent = hours[i];

  salesTable.appendChild(thEl);
}

thEl = document.createElement('th');
thEl.textContent = 'Total';
salesTable.appendChild(thEl);

//Create locations and Populate Location Data

var fandp = new LocationObject("First and Pike", 23, 65, 6.3);
var seatac = new LocationObject("SeaTac Airport", 3, 24, 1.2);
var seattleCenter = new LocationObject("Seattle Center", 11, 38, 3.7);
var capitolHill = new LocationObject("Capitol Hill", 20, 38, 2.3);
var alki = new LocationObject("Alki", 2, 16, 4.6);


fandp.loadHourlySales();
fandp.render();

seatac.loadHourlySales();
seatac.render();

seattleCenter.loadHourlySales();
seattleCenter.render();

capitolHill.loadHourlySales();
capitolHill.render();

alki.loadHourlySales();
alki.render();
