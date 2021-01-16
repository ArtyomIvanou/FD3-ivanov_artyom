import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {


  render() {
    var xxx = this.props.children
    this.props.color.forEach(e => {
      xxx = <div style={{ border: "solid 2px " + e, padding: "10px" }}>{xxx}</div>
    });

    return (xxx


    );
  }
}

export default ColorFrame;
