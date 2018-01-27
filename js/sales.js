'use strict';

var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var loc1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
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
    var loc1Name = document.getElementById('loc1Name');

    //Load Location Detail Line
    var loc1Detail = document.getElementById('loc1Detail');
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    loc1Name.appendChild(h3El);
    for (var i=0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.hourlySales[i] + ' cookies';
      console.log('Detail Loop: '+i);
      loc1Detail.appendChild(liEl);
    }
    // Load Total Sales for Location
    var loc1Sale01 = document.getElementById('loc1TotalSales');
    loc1Sale01.textContent = 'Total: ' + loc1.salesForDay + ' cookies';
    
  }
};

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

//Populate Location Data
loc1.loadHourlySales();
loc1.render();
console.log('Hourly Sales: '+loc1.hourlySales);
console.log('Sales for Day: '+loc1.salesForDay);

loc2.loadHourlySales();
loc2.render();
console.log('Hourly Sales: '+loc2.hourlySales);
console.log('Sales for Day: '+loc2.salesForDay);

loc3.loadHourlySales();
loc3.render();
console.log('Hourly Sales: '+loc3.hourlySales);
console.log('Sales for Day: '+loc3.salesForDay);

loc4.loadHourlySales();
loc4.render();
console.log('Hourly Sales: '+loc4.hourlySales);
console.log('Sales for Day: '+loc4.salesForDay);

loc5.loadHourlySales();
loc5.render();
console.log('Hourly Sales: '+loc5.hourlySales);
console.log('Sales for Day: '+loc5.salesForDay);

// function genHourlySales(minCust, maxCust, avgSale) {
//   console.log('Loading Hourly Sales');
//   console.log(minCust+' '+maxCust+' '+avgSale);
//   for (var i=0; i<13; i++) {
//     var hourlySales = [];
//     var custPerHour = getRandomCustomerNum(minCust,maxCust);
//     hourlySales.push(Math.floor(custPerHour*avgSale));
//     console.log('Cust per hour: ' + custPerHour);
//   }
//   console.log(hourlySales);
//   return hourlySales;
// }

function getRandomCustomerNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}