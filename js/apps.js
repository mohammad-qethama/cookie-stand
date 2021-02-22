'user strict';
let workingHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
const tableBodyElement= document.createElement('tbody');
let Total = [];

function tableOrg(workingHours){
  const parentElement = document.getElementById('seattle');
  const tableElement = document.createElement('table');
  tableElement.setAttribute('border','1');
  
  parentElement.appendChild(tableElement);
  const tableHeaderElement = document.createElement('thead');
  tableElement.appendChild(tableHeaderElement);
  tableElement.appendChild(tableBodyElement);
  const tableFooterElement = document.createElement('tfoot');
  tableElement.appendChild(tableFooterElement);
  const tableRowHeaderElement = document.createElement('tr');

  tableHeaderElement.appendChild(tableRowHeaderElement);
  const tableCityTag = document.createElement('th');
  tableRowHeaderElement.appendChild(tableCityTag).innerHTML='Location';

  for(let i=0;i < workingHours.length ; i++ ){
    const tableLabelElement = document.createElement('th');
    tableRowHeaderElement.appendChild(tableLabelElement);
    tableLabelElement.textContent= workingHours[i];


  }

  const tableDailyTotalTag = document.createElement('th');
  tableRowHeaderElement.appendChild(tableDailyTotalTag).innerHTML='Daily Location Total';

  const tableFooterRowElement = document.createElement('tr');

  tableFooterElement.appendChild(tableFooterRowElement);
  const tableFooterTotalElement = document.createElement('th');
  tableFooterRowElement.appendChild(tableFooterTotalElement).innerHTML='Totals';

  for(let i= 0;i < workingHours.length; i++ ){
    const tableLabelElement = document.createElement('td');
    tableFooterRowElement.appendChild(tableLabelElement).innerHTML=Total[i];



  }
  const tableTotalsElement = document.createElement('th');
  tableFooterRowElement.appendChild(tableTotalsElement).innerHTML=Total[workingHours.length];


  console.log(Total);


}

function totalCalculations (){
  for (let i =0 ; i<workingHours.length;i++){
    Total.push(seattle.cookiesNumber[i]+lima.cookiesNumber[i]+paris.cookiesNumber[i]+dubai.cookiesNumber[i]+tokyo.cookiesNumber[i]) ;
  }
  Total.push(seattle.cookiesSumProp+tokyo.cookiesSumProp+dubai.cookiesSumProp+lima.cookiesSumProp+paris.cookiesSumProp);

}

function City(cityName,minCustomerPerHour,maxCustomerPerHour,AverageCookieCustomer) {
  this.cityName= cityName;

  this.minCustomerPerHour= minCustomerPerHour;

  this.maxCustomerPerHour=maxCustomerPerHour;

  this.AverageCookieCustomer= AverageCookieCustomer;

  this.cookiesNumber=[];

}

City.prototype.randomCustomersHour= function(min,max,workHours=[])
{
  let arrayCookiesNum =[];
  let cookiesNumber=0;
  let customersRandomNumber=0;
  for (let i=0;i<workHours.length ;i++){
    customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
    cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
    arrayCookiesNum.push(cookiesNumber);

  }
  this.cookiesNumber=arrayCookiesNum;
};

City.prototype.render = function ()
{
  let cookiesSum=0;

  const tableRowElement = document.createElement('tr');
  tableBodyElement.appendChild(tableRowElement);
  const tableCityName = document.createElement('th');
  tableRowElement.appendChild(tableCityName);
  tableCityName.textContent = this.cityName;
  for (let i =0 ; i< workingHours.length;i++ )
  {
    const tableDataElement = document.createElement('td');

    tableRowElement.appendChild(tableDataElement) ;

    tableDataElement.textContent = `${this.cookiesNumber[i]}`;
    cookiesSum = cookiesSum+this.cookiesNumber[i];


  }
  this.cookiesSumProp = cookiesSum;
  const tableCityTotalElement = document.createElement('th');
  tableRowElement.appendChild(tableCityTotalElement).innerHTML= this.cookiesSumProp ;


};

const seattle = new City('Seattle',23,65,6.3);
const tokyo = new City('Tokyo',3,24,1.2);
const dubai = new City('Dubai',11,48,3.7);
const paris = new City('Paris',20,38,2.3);
const lima = new City('Lima',2,16,4.6);


seattle.randomCustomersHour(seattle.minCustomerPerHour,seattle.maxCustomerPerHour,workingHours);
seattle.render();

tokyo.randomCustomersHour(tokyo.minCustomerPerHour,tokyo.maxCustomerPerHour,workingHours);
tokyo.render();

dubai.randomCustomersHour(dubai.minCustomerPerHour,dubai.maxCustomerPerHour,workingHours);
dubai.render();
paris.randomCustomersHour(paris.minCustomerPerHour,paris.maxCustomerPerHour,workingHours);
paris.render();
lima.randomCustomersHour(lima.minCustomerPerHour,lima.maxCustomerPerHour,workingHours);
lima.render();

totalCalculations();

tableOrg(workingHours);

