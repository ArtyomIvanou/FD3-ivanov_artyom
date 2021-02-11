import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа кнопки Активные', () => {
  let clientsArr=[ 
    {id:375292223344, fio:"Иванов И.И.",fam:"Иванов", im:"Иван", otch:"Иванович",status:"active", balance:200}, 
    {id:375292223345, fio:"Сидоров С.С.",fam:"Сидоров", im:"Сидор", otch:"Сидорович",status:"active",  balance:250}, 
    {id:375292223346, fio:"Петров П.П.",fam:"Петров", im:"Пётр", otch:"Петрович",status:"active", balance:180},
    {id:375292223347, fio:"Григорьев Г.Г.",fam:"Григорьев", im:"Григорий", otch:"Григорьевич",status:"blocked", balance:-220},
  ];
  const component = renderer.create(
    <MobileCompany clients={clientsArr} key={'1'} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   // найдём в вёрстке компонента саму кнопку
   const buttonBlocked = component.root.find( el => el.type=='input' && el.props.value == 'Заблокированные' ); 
   // и "нажмём" на неё
   buttonBlocked.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   // найдём в вёрстке компонента саму кнопку
   const buttonElemAll = component.root.find( el => el.type=='input' && el.props.value == 'Все' ); 
   // и "нажмём" на неё
   buttonElemAll.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
   // найдём в вёрстке компонента саму кнопку
   const buttonElemActive = component.root.find( el => el.type=='input' && el.props.value == 'Активные' ); 
   // и "нажмём" на неё
   buttonElemActive.props.onClick();
  
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
 
});
