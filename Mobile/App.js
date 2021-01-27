"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:375292223344, fio:"Иванов И.И.",fam:"Иванов", im:"Иван", otch:"Иванович",status:"active", balance:200}, 
  {id:375292223345, fio:"Сидоров С.С.",fam:"Сидоров", im:"Сидор", otch:"Сидорович",status:"active",  balance:250}, 
  {id:375292223346, fio:"Петров П.П.",fam:"Петров", im:"Пётр", otch:"Петрович",status:"active", balance:180},
  {id:375292223347, fio:"Григорьев Г.Г.",fam:"Григорьев", im:"Григорий", otch:"Григорьевич",status:"blocked", balance:220},
];
//let clientsArr=require('./clients.json')
/*let jsonArr=JSON.stringify(clientsArr)
console.log(jsonArr)*/
ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

