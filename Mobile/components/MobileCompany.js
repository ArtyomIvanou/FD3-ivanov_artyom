import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';

import './MobileCompany.css';
import { editEvents } from './events';
class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };
  componentDidMount = () => {
    editEvents.addListener('DeleteClient', this.deteteClient);
    //editEvents.addListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
  };

  componentWillUnmount = () => {
    editEvents.removeListener('DeleteClient', this.deteteClient);
    //editEvents.removeListener('EFreeAnswerTextChanged',this.freeAnswerTextChanged);
  };
  showAll = () => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    
      
    
    this.setState({ clients:newClients });
  };
  showSort = () => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    
      let ccc = newClients.filter(function (s, i) {

        return s.status != "blocked"
      })
    
    this.setState({ clients: ccc });
  };
  deteteClient = (code) => {
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    let ccc = newClients.filter(function (s, i) {

      return s.id != code
    })
    
    this.setState({ clients: ccc });
  };
  setName1 = () => {
    this.setState({ name: 'МТС' });
  };

  setName2 = () => {
    this.setState({ name: 'Velcom' });
  };




  setBalance = (clientId, newBalance) => {
    let changed = false;
    let newClients = [...this.state.clients]; // копия самого массива клиентов
    newClients.forEach((c, i) => {
      if (c.id == clientId && c.balance != newBalance) {
        let newClient = { ...c }; // копия хэша изменившегося клиента
        newClient.balance = newBalance;
        newClients[i] = newClient;
        changed = true;
      }
    });
    if (changed)
      this.setState({ clients: newClients });
  };


  setBalance1 = () => {
    this.setBalance(375292223345, 230);
  };

  setBalance2 = () => {
    this.setBalance(375292223345, 250);
  };

  render() {

    console.log("MobileCompany render");

    var clientsCode = this.state.clients.map(client =>
      <MobileClient key={client.id} info={client} />
    );
    return (
      <div className='MobileCompany'>
        <input type="button" value="Velcom" onClick={this.setName2} />
        <input type="button" value="МТС" onClick={this.setName1} />

        <div className='MobileCompanyName'>Компания: {this.state.name}</div>

        <div className="CliensSorting">
          <input type="button" value="Все" onClick={this.showAll} />
          <input type="button" value="Активные" onClick={this.showSort} />
          <input type="button" value="Заблокированные" onClick={this.showSort}/>
        </div>
        <table className='MobileCompanyClients'>
          <tbody className='Answers' >
            <tr><td>имя</td><td>фамилия</td><td>отчество</td><td>статус</td><td>баланс</td><td>редактировать</td><td>удалить</td></tr>
          </tbody>
          <tbody className='Answers' >{clientsCode}</tbody>
        </table>
        <div> <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
          <input type="button" value="Сидоров=250" onClick={this.setBalance2} /></div>
        <div><input type="button" value="Добавить нового клиента" /></div>
      </div>
    )
      /*return (
        <div className='MobileCompany'>
          <input type="button" value="Velcom" onClick={this.setName2} />
          <input type="button" value="МТС" onClick={this.setName1} />
         
          <div className='MobileCompanyName'>Компания: {this.state.name}</div>
  
          <div className="CliensSorting">
          <input type="button" value="Все"  />
          <input type="button" value="Активные"  />
          <input type="button" value="Заблокированные" />
          </div>
  
          <div className='MobileCompanyClients'>
            {clientsCode}
          </div>
          <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
          <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
        </div>
      )*/
      ;

  }

}

export default MobileCompany;
