'use strict';

var loc1 = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlySales: [],
  salesForDay: 0,
  loadHourlySales: function() {
    //this.hourlySales = genHourlySales(this.minCust,this.maxCust,this.avgSale);
    for (var i=0; i<15; i++) {
      var custPerHour = getRandomCustomerNum(this.minCust,this.maxCust);
      this.hourlySales.push(Math.floor(custPerHour*this.avgSale));
      this.salesForDay+=this.hourlySales[i];
      console.log('Cust per hour: ' + custPerHour);
    }
  }
};

//Mainline
loc1.loadHourlySales();
console.log(loc1.hourlySales);
console.log(loc1.salesForDay);

//Load Location 1 Variables
var element = document.getElementById('loc1name');
element.textContent = loc1.name;

element = document.getElementById('loc1saleh00');
element.textContent = '6am ' + loc1.hourlySales[0] + ' cookies';
element = document.getElementById('loc1saleh01');
element.textContent = '7am ' + loc1.hourlySales[1] + ' cookies';
element = document.getElementById('loc1saleh02');
element.textContent = '8am ' + loc1.hourlySales[2] + ' cookies';
element = document.getElementById('loc1saleh03');
element.textContent = '9am ' + loc1.hourlySales[3] + ' cookies';
element = document.getElementById('loc1saleh04');
element.textContent = '10am ' + loc1.hourlySales[4] + ' cookies';
element = document.getElementById('loc1saleh05');
element.textContent = '11am ' + loc1.hourlySales[5] + ' cookies';
element = document.getElementById('loc1saleh06');
element.textContent = '12pm ' + loc1.hourlySales[6] + ' cookies';
element = document.getElementById('loc1saleh07');
element.textContent = '1pm ' + loc1.hourlySales[7] + ' cookies';
element = document.getElementById('loc1saleh08');
element.textContent = '2pm ' + loc1.hourlySales[8] + ' cookies';
element = document.getElementById('loc1saleh09');
element.textContent = '3pm ' + loc1.hourlySales[9] + ' cookies';
element = document.getElementById('loc1saleh10');
element.textContent = '4pm ' + loc1.hourlySales[10] + ' cookies';
element = document.getElementById('loc1saleh11');
element.textContent = '5pm ' + loc1.hourlySales[11] + ' cookies';
element = document.getElementById('loc1saleh12');
element.textContent = '6pm ' + loc1.hourlySales[12] + ' cookies';
element = document.getElementById('loc1saleh13');
element.textContent = '7pm ' + loc1.hourlySales[13] + ' cookies';
element = document.getElementById('loc1saleh14');
element.textContent = '8pm ' + loc1.hourlySales[14] + ' cookies';

element = document.getElementById('loc1totalsales');
element.textContent = 'Total: ' + loc1.salesForDay + ' cookies';

//Global Functions Start Here
function getRandomCustomerNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function genHourlySales(minCust, maxCust, avgSale) {
  console.log('Loading Hourly Sales');
  console.log(minCust+' '+maxCust+' '+avgSale);
  for (var i=0; i<13; i++) {
    var hourlySales = [];
    var custPerHour = getRandomCustomerNum(minCust,maxCust);
    hourlySales.push(Math.floor(custPerHour*avgSale));
    console.log('Cust per hour: ' + custPerHour);
  }
  console.log(hourlySales);
  return hourlySales;
}