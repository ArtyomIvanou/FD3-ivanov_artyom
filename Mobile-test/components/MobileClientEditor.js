import React from 'react';


import './MobileClient.css';
import { editEvents } from './events';
class MobileClientEditor extends React.PureComponent {

 
  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id=" + this.props.info.id + " componentWillReceiveProps");
    this.setState({ info: newProps.info });
  };


  newId = null
  newFam = null
  newIm = null
  newOtch = null
  newStatus = null
  newBalance = null
  setNewId = (ref) => {
    if (ref==null) {
      this.newId = this.state.info.id
    } else {
      this.newId = ref;
    }
    
  };
  setNewFam = (ref) => {
    if (ref==null) {
      this.newFam = this.props.info.fam
    } else {
      this.newFam = ref;
    }
   
  };
  setNewIm = (ref) => {
    if (ref==null) {
      this.newIm = this.props.info.im
    } else {
      this.newIm = ref;
    }
   
  };
  setNewOtch = (ref) => {
    if (ref==null) {
      this.newOtch = this.props.info.otch
    } else {
      this.newOtch = ref;
    }
    
  };
  setNewStatus = (ref) => {
    if (ref==null) {
      this.newStatus = "blocked"
    } else {
      this.newStatus = ref;
    }
   
  };
  setNewBalance = (ref) => {
    if (ref==null) {
      this.newBalance = this.props.info.balance
    } else {
      this.newBalance = ref;
    }
    
  };
  save = () => {
   
    var client = {}
    client.id = this.newId.value
    client.fam = this.newFam.value
    client.im = this.newIm.value
    client.otch = this.newOtch.value
    client.status = this.newStatus.value
    client.balance = this.newBalance.value
    //console.log(client.status)
    if (this.props.newClient) {
      editEvents.emit('SaveNewClient', client)
    } else {
      editEvents.emit('SaveClient', this.state.info.id, client)
    }
    
  };
  render() {
    
    console.log("MobileClientEdit id=" + this.state.info.id + " render");
    
    return (
      <div className='MobileClientEdit'>
        <div>Номер<input type='text' id="newNumber" defaultValue={this.state.info.id} ref={this.setNewId}></input></div>
        <div>Фамилия<input type='text' id="newFam" defaultValue={this.state.info.fam} ref={this.setNewFam}></input></div>
        <div>Имя<input type='text' id="newIm" defaultValue={this.state.info.im} ref={this.setNewIm}></input></div>
        <div>Отчество<input type='text' id="newOtch" defaultValue={this.state.info.otch} ref={this.setNewOtch}></input></div>
        <div>Статус
          <select ref={this.setNewStatus} id="newStatus" defaultValue="blocked">
            <option value="active" >active</option>
            <option value="blocked" >blocked</option>
          </select>
        </div>
        <div>Баланс<input type='text' id="newBalance" defaultValue={this.state.info.balance} ref={this.setNewBalance}></input></div>
        <input type="button" value="Сохранить" id='saveNewClient' onClick={this.save} />
      </div>
    );

  }

}

export default MobileClientEditor;
