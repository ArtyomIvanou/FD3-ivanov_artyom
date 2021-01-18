import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {
  cbPressed= (EO) => {
    //console.log(EO.target.value)
   this.props.cbPressed(EO.target.value)
   }

  render() {
    

    return (<div><input type='button' value={this.props.caption1} onClick={this.cbPressed}></input>{this.props.children}
    <input type='button' value={this.props.caption2} onClick={this.cbPressed}></input></div>


    );
  }
}

export default DoubleButton;
