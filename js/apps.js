'user strict';
let workingHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
const tableBodyElement= document.createElement('tbody');
const tableElement = document.createElement('table');
const tableHeaderElement = document.createElement('thead');
const tableFooterElement = document.createElement('tfoot');
let tabelFootDatalogger = [];
let Total = [];
City.allCities=[];


function tableOrg(){
  const parentElement = document.getElementById('seattle');

  parentElement.appendChild(tableElement);
  tableElement.appendChild(tableHeaderElement);
  tableElement.appendChild(tableBodyElement);
  tableElement.appendChild(tableFooterElement);}

function createHeader(){
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
  tableRowHeaderElement.appendChild(tableDailyTotalTag).innerHTML='Daily Location Total';}

function createFooter (){
  const tableFooterRowElement = document.createElement('tr');

  tableFooterElement.appendChild(tableFooterRowElement);
  const tableFooterTotalElement = document.createElement('th');
  tableFooterRowElement.appendChild(tableFooterTotalElement).innerHTML='Totals';

  for(let i= 0;i < workingHours.length; i++ ){
    const tableLabelElement = document.createElement('td');
    tableFooterRowElement.appendChild(tableLabelElement).innerHTML=Total[i];

    tabelFootDatalogger.push(tableLabelElement);

  }
  const tableTotalsElement = document.createElement('td');
  tableFooterRowElement.appendChild(tableTotalsElement).innerHTML=Total[workingHours.length];

  tabelFootDatalogger.push(tableTotalsElement);
}
function updateFooter(){
  for(let i= 0;i <= workingHours.length; i++ ){
    tabelFootDatalogger[i].innerHTML=Total[i];



  }
 

}

function totalCalculations (){

  let summDaily = 0 ;
  Total = [];
  for (let i =0 ; i<workingHours.length;i++){
    let sumHourly=0;
    for (let j=0 ;j<City.allCities.length;j++ )
    {
      // Total.push(seattle.cookiesNumber[i]+lima.cookiesNumber[i]+paris.cookiesNumber[i]+dubai.cookiesNumber[i]+tokyo.cookiesNumber[i]) ;

      sumHourly = sumHourly +(City.allCities[j].cookiesNumber[i]);
    }

    Total.push(sumHourly);


  }
  for (let j=0 ;j<City.allCities.length;j++ ){summDaily = summDaily + City.allCities[j].cookiesSumProp;}

  Total.push(summDaily);
}


function City(cityName,minCustomerPerHour,maxCustomerPerHour,AverageCookieCustomer) {
  this.cityName= cityName;

  this.minCustomerPerHour= minCustomerPerHour;

  this.maxCustomerPerHour=maxCustomerPerHour;

  this.AverageCookieCustomer= AverageCookieCustomer;

  this.cookiesNumber=[];
  City.allCities.push(this);
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

for (let i =0 ; i<City.allCities.length;i++){
  City.allCities[i].randomCustomersHour(City.allCities[0].minCustomerPerHour,City.allCities[i].maxCustomerPerHour,workingHours);
  City.allCities[i].render();
}

const formEvent = document.getElementById('newBranch');

formEvent.addEventListener('submit',function (event) {

  event.preventDefault();
  const cityName = event.target.city_name.value;
  const maxCustomerPerHour = event.target.maxCustomers.value;
  const minCustomerPerHour = event.target.minCustomers.value;
  const AverageCookieCustomer = event.target.avgCookiesCustomers.value;
  const newCity = new City(cityName,minCustomerPerHour,maxCustomerPerHour,AverageCookieCustomer);
  console.log(newCity);
  console.log(City.allCities);


  newCity.randomCustomersHour(newCity.minCustomerPerHour,newCity.maxCustomerPerHour,workingHours);
  newCity.render();
  formEvent.reset();
  totalCalculations();
  
  updateFooter();



});

totalCalculations();
tableOrg();

createHeader();
createFooter();

