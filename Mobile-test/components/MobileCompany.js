﻿import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import MobileClientEditor from './MobileClientEditor';
import './MobileCompany.css';

import { editEvents } from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    //name: this.props.name,
    clients: this.props.clients,
    edited: false,
    editNum: {id:1},
    created:false,
    

  };
  componentDidMount = () => {
    editEvents.addListener('DeleteClient', this.deteteClient);
    editEvents.addListener('EditClient', this.editClient);
    editEvents.addListener('SaveClient', this.saveClient);
    editEvents.addListener('SaveNewClient', this.saveNewClient);
   
  };

  componentWillUnmount = () => {
    editEvents.removeListener('DeleteClient', this.deteteClient);
    editEvents.removeListener('EditClient', this.editClient);
    editEvents.removeListener('SaveClient', this.saveClient);
    editEvents.removeListener('SaveNewClient', this.saveNewClient);
   
  };
  allClients = this.props.clients
  hashOfNewClient={id:'new', fio:'new',fam:'new', im:'new', otch:'new',status:'new', balance:0}
  qqqq = (mode) => {
    if (mode == 1) {//все клиенты

      var ccc = [...this.allClients]; // копия самого массива клиентов

    }
    if (mode == 2) {//активные клиенты

      let newClients = [...this.allClients]; // копия самого массива клиентов

      var ccc = newClients.filter(function (s, i) {

        return s.status != "blocked"
      })

    }
    if (mode == 3) {//заблокированные клиенты
      let newClients = [...this.allClients]; // копия самого массива клиентов

      var ccc = newClients.filter(function (s, i) {

        return s.status != "active"
      })

    }
    this.setState({ clients: ccc });

  };
  showAll = () => {
    this.qqqq(1)
  };
  showSortActive = () => {
    this.qqqq(2)

  };
  showSortBlocked = () => {
    this.qqqq(3)

  };

  deteteClient = (code) => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    let ccc = newClients.filter(function (s, i) {

      return s.id != code
    })
    this.allClients = this.allClients.filter(function (s, i) {

      return s.id != code
    })
    this.setState({ clients: ccc });
  };
  editedClient=null
  editClient = (code) => {
    this.setState({ created: false });
    this.setState({ edited: true })
    var ttt = null
    let newClients = [...this.state.clients]; // копия самого массива клиентов
   /* let ccc = newClients.filter(function (s, i) {
      if (s.id == code) {
        ttt = i
        return
      } 
    })*/
    this.editedClient=null
    this.editedClient = newClients.filter(function (s, i) {
    if (s.id == code) {
      return s
    }
        
      
    })
    //console.log(this.editedClient[0].id)
    this.setState({ editNum: this.editedClient[0] })
  };
  
  saveClient = (code,hash) => {
    this.setState({ created: false });
    this.setState({ edited: false })
    this.setState({ editNum: null })
    var ttt = null
    var aaa=null
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    let ccc = newClients.filter(function (s, i) {
      if (s.id == code) {
        ttt = i
      } 
    })
    let www=this.allClients.filter(function (s, i) {
      if (s.id == code) {
        aaa = i
      } 
    })
    this.allClients[aaa]=hash
    newClients[ttt]=hash
    this.setState({ clients: newClients})
    
  };
  saveNewClient = (hash) => {
    
    this.setState({ created: false });
    this.setState({ edited: false })
    this.setState({ editNum: null })
    let newClients = [...this.state.clients]// копия самого массива клиентов
    newClients.push(hash)
    this.allClients.push(hash)
    this.setState({ clients: newClients})
    
  };
  addNewClient = () => {
    this.setState({ edited: false });
    this.setState({ created: true });
  };
  /*setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'Velcom' });
  };*/




 

  render() {
    
    console.log("MobileCompany render");
    if (this.state.edited) {
      console.log(this.state.editNum.id);
      var mobileClientEditor= <MobileClientEditor key={this.state.editNum.id} info={this.state.editNum} />
    }
    else{var mobileClientEditor=null}
    if (this.state.created) {
      var mobileClientCreator= <MobileClientEditor key={this.allClients.length+1} info={this.hashOfNewClient} newClient={true}/>
    } else {
      var mobileClientCreator=null
    }
    var clientsCode = this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} />
    );
    return (
      <div className='MobileCompany'>
       

        <div className="CliensSorting">
          <input type="button" value="Все" onClick={this.showAll} />
          <input type="button" value="Активные" onClick={this.showSortActive} />
          <input type="button" value="Заблокированные" onClick={this.showSortBlocked} />
        </div>
        <table className='MobileCompanyClients'>
          <tbody className='Answers' >
            <tr><td>фамилия</td><td>имя</td><td>отчество</td><td>статус</td><td>баланс</td><td>редактировать</td><td>удалить</td></tr>
          </tbody>
          <tbody className='Answers' >{clientsCode}</tbody>
        </table>
       
        <div><input type="button" value="Добавить нового клиента" onClick={this.addNewClient}/></div>
        <div>{mobileClientEditor}</div>
        <div>{mobileClientCreator}</div>
      </div>
    )
    
      ;

  }

}

export default MobileCompany;
