import React from 'react';
import PropTypes from 'prop-types';

//import './VotesAnswer.css';

class ProductDescription extends React.Component {

 /* static propTypes = {
    code: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    workMode: PropTypes.number.isRequired,
    freeanswer: PropTypes.bool,
    freeanswertext: PropTypes.string.isRequired,
    cbFreeAnswerTextChanged: PropTypes.func.isRequired,
    cbSelected: PropTypes.func.isRequired,
    selectedAnswerCode: PropTypes.number, 
  };*/
  state = {
    /*backgrondChecked: 'backgrondChecked',
            backgrondNotChecked: 'backgrondNotChecked',
            backgroundChanged: false,
            classNameTr: 'ProductBlock_white',
            selectedItem: this.props.selectedItemID,
            deleteItem: this.props.number,*/
}
  qqq = (EO) => {
    this.props.cbDeteted(this.props.number);
  }

  selected = (EO) => { 
    this.props.selected(this.props.number);
  }

  render() {
  
return (/*<tr  className= {selectedStyle} data= {this.props.number} onClick= {this.selected}>
<td className= 'cell'><span className= 'product_name'>{this.props.productName}</span></td>
<td className= 'cell'><span className= "label_name">{this.props.photo}</span></td>
<td className= 'cell'><span className= 'price' >{this.props.price}</span></td>
<td className= 'cell'><span className= 'count' >{this.props.count}</span></td>
<td className= 'cell'>{showButton}</td>
</tr>*/
<div><span>Имя: {this.props.productName}</span></div>
) 
  }

}

export default ProductDescription;