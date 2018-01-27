'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Location (name, minCust, maxCust,avgSale) {
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
      console.log('Cust per hour: ' + custPerHour);
    }
  };
  this.render = function(){
  //Load Location Variables to HTML
  
  //Load Location Name
    var loc1Name = document.getElementById('loc1Name');

    //Load Location Detail Line

    var thEl = document.createElement('th');
    thEl.textContent = this.name;
    loc1Name.appendChild(thEl);
    var loc1Data = document.getElementById('loc1Data');    
    for (var i=0; i<hours.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = this.hourlySales[i];
      console.log('Detail Loop: '+i);
      loc1Data.appendChild(tdEl);
    }
    // Load Total Sales for Location
    var loc1Sale01 = document.getElementById('loc1TotalSales');
    loc1Sale01.textContent = this.salesForDay;
    
  };
}




var loc2 = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourlySales: [],
  salesForDay: 0,
  loadHourlySales: function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<hours.length; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay+=this.hourlySales[i];
      console.log('Cust per hour: ' + custPerHour);
    }
  },
  render: function(){
  //Load Location Variables to HTML
  
  //Load Location Name
    var loc2Name = document.getElementById('loc2Name');

    //Load Location Detail Line
    var loc2Detail = document.getElementById('loc2Detail');
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    loc2Name.appendChild(h3El);
    for (var i=0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('Detail Loop: '+i);
      loc2Detail.appendChild(liEl);
    }
    // Load Total Sales for Location
    var loc2Sale01 = document.getElementById('loc2TotalSales');
    loc2Sale01.textContent = 'Total: ' + loc2.salesForDay + ' cookies';
    
  }
};

var loc3 = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hourlySales: [],
  salesForDay: 0,
  loadHourlySales: function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<hours.length; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay+=this.hourlySales[i];
      console.log('Cust per hour: ' + custPerHour);
    }
  },
  render: function(){
  //Load Location Variables to HTML
  
  //Load Location Name
    var loc3Name = document.getElementById('loc3Name');

    //Load Location Detail Line
    var loc3Detail = document.getElementById('loc3Detail');
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    loc3Name.appendChild(h3El);
    for (var i=0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('Detail Loop: '+i);
      loc3Detail.appendChild(liEl);
    }
    // Load Total Sales for Location
    var loc3Sale01 = document.getElementById('loc3TotalSales');
    loc3Sale01.textContent = 'Total: ' + loc3.salesForDay + ' cookies';
    
  }
};

var loc4 = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourlySales: [],
  salesForDay: 0,
  loadHourlySales: function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<hours.length; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay+=this.hourlySales[i];
      console.log('Cust per hour: ' + custPerHour);
    }
  },
  render: function(){
  //Load Location Variables to HTML
  
  //Load Location Name
    var loc4Name = document.getElementById('loc4Name');

    //Load Location Detail Line
    var loc4Detail = document.getElementById('loc4Detail');
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    loc4Name.appendChild(h3El);
    for (var i=0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('Detail Loop: '+i);
      loc4Detail.appendChild(liEl);
    }
    // Load Total Sales for Location
    var loc4Sale01 = document.getElementById('loc4TotalSales');
    loc4Sale01.textContent = 'Total: ' + loc4.salesForDay + ' cookies';
    
  }
};

var loc5 = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourlySales: [],
  salesForDay: 0,
  loadHourlySales: function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<hours.length; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay+=this.hourlySales[i];
      console.log('Cust per hour: ' + custPerHour);
    }
  },
  render: function(){
  //Load Location Variables to HTML
  
  //Load Location Name
    var loc5Name = document.getElementById('loc5Name');

    //Load Location Detail Line
    var loc5Detail = document.getElementById('loc5Detail');
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    loc5Name.appendChild(h3El);
    for (var i=0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('Detail Loop: '+i);
      loc5Detail.appendChild(liEl);
    }
    // Load Total Sales for Location
    var loc5Sale01 = document.getElementById('loc5TotalSales');
    loc5Sale01.textContent = 'Total: ' + loc5.salesForDay + ' cookies';
    
  }
};


//********   Mainline ********

//Create Table Header
for (var i=0; i<hours.length; i++) {
  var locHour = document.getElementById('locHour');
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  console.log('Column Header: '+thEl.textContent);
  locHour.appendChild(thEl);
}
//Create locations and Populate Location Data

var fandp = new Location("First and Pike", 23, 65, 6.3);
var seatac = new Location("SeaTac Airport", 3, 24, 1.2);


fandp.loadHourlySales();
fandp.render();
console.log('Hourly Sales: '+fandp.hourlySales);
console.log('Sales for Day: '+fandp.salesForDay);



function getRandomCustomerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}