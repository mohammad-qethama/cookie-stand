'user strict';
const seattleSales = {
  cityName: 'Seattle' ,
  minCustomerPerHour: 23,
  maxCustomerPerHour:65,
  AverageCookieCustomer:6.3,
  randomCustomersHour : function(min,max,workHours=[])
  {
    let arrayCookiesNum =[];
    let cookiesNumber=0;
    let customersRandomNumber=0;
    for (let i=0;i<workHours.length ;i++){
      customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
      cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
      arrayCookiesNum.push(cookiesNumber);

    }
    console.log(arrayCookiesNum);
    return arrayCookiesNum;
  },
  render : function (cookies,hoursSales){
    let cookiesSum=0;
    const parentElement = document.getElementById('seattle');
    const headElement = document.createElement('h2');
    parentElement.appendChild(headElement);
    headElement.textContent = this.cityName;
    const listElement = document.createElement('ul');
    parentElement.appendChild(listElement);
    for (let i =0 ; i< hoursSales.length;i++ )
    {
      const liElemetn = document.createElement('li');

      listElement.appendChild(liElemetn) ;

      liElemetn.textContent = `${hoursSales[i]} : ${cookies[i]}.`;
      cookiesSum = cookiesSum+cookies[i];


    }

    const li1Elemetn = document.createElement('li');
    listElement.appendChild(li1Elemetn);
    li1Elemetn.textContent = `Total: ${cookiesSum}`;



  },

};
const tokyoSales = {
  cityName: 'Tokyo' ,
  minCustomerPerHour: 3,
  maxCustomerPerHour:24,
  AverageCookieCustomer:1.2,
  randomCustomersHour : function(min,max,workHours=[])
  {
    let arrayCookiesNum =[];
    let cookiesNumber=0;
    let customersRandomNumber=0;
    for (let i=0;i<workHours.length ;i++){
      customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
      cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
      arrayCookiesNum.push(cookiesNumber);

    }
    console.log(arrayCookiesNum);
    return arrayCookiesNum;
  },
  render : function (cookies,hoursSales){
    let cookiesSum=0;
    const parentElement = document.getElementById('tokyo');
    const headElement = document.createElement('h2');
    console.log(headElement);
    parentElement.appendChild(headElement);
    headElement.textContent = this.cityName;
    const listElement = document.createElement('ul');
    parentElement.appendChild(listElement);
    for (let i =0 ; i< hoursSales.length;i++ )
    {
      const liElemetn = document.createElement('li');

      listElement.appendChild(liElemetn) ;

      liElemetn.textContent = `${hoursSales[i]} : ${cookies[i]}.`;
      cookiesSum = cookiesSum+cookies[i];


    }

    const li1Elemetn = document.createElement('li');
    listElement.appendChild(li1Elemetn);
    li1Elemetn.textContent = `Total: ${cookiesSum}`;



  },

};
const dubaiSales = {
  cityName: 'Dubai' ,
  minCustomerPerHour: 11,
  maxCustomerPerHour:48,
  AverageCookieCustomer:3.7,
  randomCustomersHour : function(min,max,workHours=[])
  {
    let arrayCookiesNum =[];
    let cookiesNumber=0;
    let customersRandomNumber=0;
    for (let i=0;i<workHours.length ;i++){
      customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
      cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
      arrayCookiesNum.push(cookiesNumber);

    }
    console.log(arrayCookiesNum);
    return arrayCookiesNum;
  },
  render : function (cookies,hoursSales){
    let cookiesSum=0;
    const parentElement = document.getElementById('dubai');
    const headElement = document.createElement('h2');
    console.log(headElement);
    parentElement.appendChild(headElement);
    headElement.textContent = this.cityName;
    const listElement = document.createElement('ul');
    parentElement.appendChild(listElement);
    for (let i =0 ; i< hoursSales.length;i++ )
    {
      const liElemetn = document.createElement('li');

      listElement.appendChild(liElemetn) ;

      liElemetn.textContent = `${hoursSales[i]} : ${cookies[i]}.`;
      cookiesSum = cookiesSum+cookies[i];


    }

    const li1Elemetn = document.createElement('li');
    listElement.appendChild(li1Elemetn);
    li1Elemetn.textContent = `Total: ${cookiesSum}`;



  },

};

const parisSales = {
  cityName: 'Paris' ,
  minCustomerPerHour: 20,
  maxCustomerPerHour:38,
  AverageCookieCustomer:2.3,
  randomCustomersHour : function(min,max,workHours=[])
  {
    let arrayCookiesNum =[];
    let cookiesNumber=0;
    let customersRandomNumber=0;
    for (let i=0;i<workHours.length ;i++){
      customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
      cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
      arrayCookiesNum.push(cookiesNumber);

    }
    console.log(arrayCookiesNum);
    return arrayCookiesNum;
  },
  render : function (cookies,hoursSales){
    let cookiesSum=0;
    const parentElement = document.getElementById('paris');
    const headElement = document.createElement('h2');
    console.log(headElement);
    parentElement.appendChild(headElement);
    headElement.textContent = this.cityName;
    const listElement = document.createElement('ul');
    parentElement.appendChild(listElement);
    for (let i =0 ; i< hoursSales.length;i++ )
    {
      const liElemetn = document.createElement('li');

      listElement.appendChild(liElemetn) ;

      liElemetn.textContent = `${hoursSales[i]} : ${cookies[i]}.`;
      cookiesSum = cookiesSum+cookies[i];


    }

    const li1Elemetn = document.createElement('li');
    listElement.appendChild(li1Elemetn);
    li1Elemetn.textContent = `Total: ${cookiesSum}`;



  },

};
const limaSales = {
  cityName: 'Lima' ,
  minCustomerPerHour: 2,
  maxCustomerPerHour:16,
  AverageCookieCustomer:4.6,
  randomCustomersHour : function(min,max,workHours=[])
  {
    let arrayCookiesNum =[];
    let cookiesNumber=0;
    let customersRandomNumber=0;
    for (let i=0;i<workHours.length ;i++){
      customersRandomNumber=Math.floor(Math.random() * (max - min) + min);
      cookiesNumber = Math.ceil(customersRandomNumber*this.AverageCookieCustomer);
      arrayCookiesNum.push(cookiesNumber);

    }
    console.log(arrayCookiesNum);
    return arrayCookiesNum;
  },
  render : function (cookies,hoursSales){
    let cookiesSum=0;
    const parentElement = document.getElementById('lima');
    const headElement = document.createElement('h2');
    console.log(headElement);
    parentElement.appendChild(headElement);
    headElement.textContent = this.cityName;
    const listElement = document.createElement('ul');
    parentElement.appendChild(listElement);
    for (let i =0 ; i< hoursSales.length;i++ )
    {
      const liElemetn = document.createElement('li');

      listElement.appendChild(liElemetn) ;

      liElemetn.textContent = `${hoursSales[i]} : ${cookies[i]}.`;
      cookiesSum = cookiesSum+cookies[i];


    }

    const li1Elemetn = document.createElement('li');
    listElement.appendChild(li1Elemetn);
    li1Elemetn.textContent = `Total: ${cookiesSum}`;



  },

};




let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let seattle = seattleSales.randomCustomersHour(seattleSales.minCustomerPerHour,seattleSales.maxCustomerPerHour,workingHours);
let Tokyo = tokyoSales.randomCustomersHour(tokyoSales.minCustomerPerHour,tokyoSales.maxCustomerPerHour,workingHours);
let dubai = dubaiSales.randomCustomersHour(dubaiSales.maxCustomerPerHour,dubaiSales.minCustomerPerHour,workingHours);
let paris = parisSales.randomCustomersHour(parisSales.minCustomerPerHour,parisSales.maxCustomerPerHour,workingHours);
let lima = limaSales.randomCustomersHour(limaSales.minCustomerPerHour,limaSales.maxCustomerPerHour,workingHours);
seattleSales.render(seattle,workingHours);
tokyoSales.render(Tokyo,workingHours);
dubaiSales.render(dubai,workingHours);
parisSales.render(paris,workingHours);
limaSales.render(lima,workingHours);

