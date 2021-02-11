import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('работа кнопки edit and delete', () => {
  //массив клиентов
  let clientsArr = [
    { id: 375292223344, fio: "Иванов И.И.", fam: "Иванов", im: "Иван", otch: "Иванович", status: "active", balance: 200 },
    { id: 375292223345, fio: "Сидоров С.С.", fam: "Сидоров", im: "Сидор", otch: "Сидорович", status: "active", balance: 250 },
    { id: 375292223346, fio: "Петров П.П.", fam: "Петров", im: "Пётр", otch: "Петрович", status: "active", balance: 180 },
    { id: 375292223347, fio: "Григорьев Г.Г.", fam: "Григорьев", im: "Григорий", otch: "Григорьевич", status: "blocked", balance: -220 },
  ];
//создаем компонент
  const component = renderer.create(
    <MobileCompany clients={clientsArr} key={'1'} />
  );
  let componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();

//ищем клиента для редактирования
  const buttonElemNew = component.root.find(el => el.type == 'input' && el.props.id == '375292223344Edit');
  
  
  buttonElemNew.props.onClick();
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //новые данные клиента
  var newClienta = { id: 375292223344, fio: "Александров А.А", fam: "Александров", im: "Александр", otch: "Александрович", status: "active", balance: 500 }



  const inputNewNumb = component.root.find(el => el.type == 'input' && el.props.id == "newNumber");
 //печатаем
  inputNewNumb.ref = newClienta.id;
 //печатаем
  const inputNewFam = component.root.find(el => el.type == 'input' && el.props.id == "newFam");
  //печатаем
  inputNewFam.ref = newClienta.fam;
  const inputNewIm = component.root.find(el => el.type == 'input' && el.props.id == "newIm");
//печатаем
  inputNewIm.ref= newClienta.im;
  const inputNewOtch = component.root.find(el => el.type == 'input' && el.props.id == "newOtch");
 //выбираем
  inputNewOtch.ref= newClienta.otch;
  const inputNewStatus = component.root.find( el => el.type=='select' && el.props.id == "newStatus" ); 
 //печатаем
  inputNewStatus.ref=newClienta.status;
  const inputNewBalance = component.root.find(el => el.type == 'input' && el.props.id == "newBalance");
 //печатаем
  inputNewBalance.ref= newClienta.balance;



//сохраняем
  const buttonElemSaveNew = component.root.find(el => el.type == 'input' && el.props.id=='saveNewClient');
  // и "нажмём" на неё
  buttonElemSaveNew.props.onClick();


  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();


//удаляем
  const buttonDelete = component.root.find(el => el.type == 'input' && el.props.id == '375292223347Delete');
  // и "нажмём" на неё
  //buttonElemNew.props.info=
  buttonDelete.props.onClick()
  componentTree = component.toJSON();
  expect(componentTree).toMatchSnapshot();
});
