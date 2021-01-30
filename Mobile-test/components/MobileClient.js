import React from 'react';


import './MobileClient.css';
import {editEvents} from './events';
class MobileClient extends React.PureComponent {

  

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };
  deleted = (EO) => {
   
    editEvents.emit('DeleteClient',this.state.info.id);
  }
  edited = (EO) => {
   
    editEvents.emit('EditClient',this.state.info.id);
  }
  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    return (
      <tr className='MobileClient'>
        
        <td className='MobileClientFam'>{this.state.info.fam}</td>
        <td className='MobileClientIm'>{this.state.info.im}</td>
        <td className='MobileClientOtch'>{this.state.info.otch}</td>
        <td className='MobileClientStatus'>{this.state.info.status}</td>
        <td className='MobileClientBalance'>{this.state.info.balance}</td>
        <td className="ButtonEdit"> <input type="button" value="Редактировать" onClick={this.edited}  /></td>
        <td className="ButtonDelete"> <input type="button" value="Удалить" onClick={this.deleted}  /></td>
      </tr>
    )
    
  }

}

export default MobileClient;
