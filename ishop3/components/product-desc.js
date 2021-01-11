import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//import './VotesAnswer.css';

class ProductDescription extends React.Component {

  
  state = {
   
  }
  qqq = (EO) => {
    this.props.cbDeteted(this.props.number);
  }

  selected = (EO) => {
    this.props.selected(this.props.number);
  }

  render() {

    return (
      <Fragment>
        <div><span>Имя: {this.props.productName}</span></div>
        <div><span>Label: {this.props.photo}</span></div>
        <div><span>Цена: {this.props.price}</span></div>
        <div><span>Количество: {this.props.count}</span></div>
      </Fragment>

    )
  }

}

export default ProductDescription;