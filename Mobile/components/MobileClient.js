import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {editEvents} from './events';
class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      fio: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

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
  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    return (
      <tr className='MobileClient'>
        
        <td className='MobileClientFam'>{this.state.info.fam}</td>
        <td className='MobileClientIm'>{this.state.info.im}</td>
        <td className='MobileClientOtch'>{this.state.info.otch}</td>
        <td className='MobileClientStatus'>{this.state.info.status}</td>
        <td className='MobileClientBalance'>{this.state.info.balance}</td>
        <td className="ButtonEdit"> <input type="button" value="Редактировать"   /></td>
        <td className="ButtonDelete"> <input type="button" value="Удалить" onClick={this.deleted}  /></td>
      </tr>
    )
    /*return (
      <div className='MobileClient'>
        
        <span className='MobileClientFam'>{this.state.info.fam}</span>
        <span className='MobileClientIm'>{this.state.info.im}</span>
        <span className='MobileClientOtch'>{this.state.info.otch}</span>
        <span className='MobileClientStatus'>{this.state.info.status}</span>
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
        <span className="ButtonEdit"> <input type="button" value="Редактировать"   /></span>
        <span className="ButtonDelete"> <input type="button" value="Удалить"   /></span>
      </div>
    );*/

  }

}

export default MobileClient;
