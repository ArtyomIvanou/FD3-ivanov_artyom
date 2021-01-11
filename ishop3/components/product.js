import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//import './VotesAnswer.css';

class ProductBlock extends React.Component {

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
    backgrondChecked: 'backgrondChecked',
    backgrondNotChecked: 'backgrondNotChecked',
    backgroundChanged: false,
    classNameTr: 'ProductBlock_white',
    selectedItem: this.props.selectedItemID,
    deleteItem: this.props.number,
    editIsWrong:this.props.editIsWrong,
  }
  qqq = (EO) => {
    if (this.props.editIsWrong) {
      return
    }
    this.props.cbDeteted(this.props.number);
  }

  selected = (EO) => {
    if (this.props.editIsWrong) {
      return
    }
    this.props.selected(this.props.number);
  }
  edited = (EO) => {
    if (this.props.editIsWrong) {
      return
    }
    EO.stopPropagation()
    this.props.edited(this.props.number,true);
  
    
  }

  render() {
    //console.log(this.props.editIsWrong)
    if (this.props.number == 0) {//проверка на шапку таблицы
      var showButton = null
    } else {
      var showButton = <Fragment><input type='button' value='delete' name='delete' data={this.props.number} className='button_delete' onClick={this.qqq}/>
      <input type='button' value='edit' name='edit' data={this.props.number} className='button_edit' onClick={this.edited}/></Fragment>
     
    }
    //проверка на выделеный текст
    if (this.props.selectedItemID == this.props.number && this.props.number > 0) {
      var selectedStyle = this.state.backgrondChecked
    } else {
      var selectedStyle = this.state.backgrondNotChecked
    }
    return (
      <tr className={selectedStyle} data={this.props.number} onClick={this.selected}>
        <td className='cell'><span className='product_name'>{this.props.productName}</span></td>
        <td className='cell'><span className="label_name">{this.props.photo}</span></td>
        <td className='cell'><span className='price' >{this.props.price}</span></td>
        <td className='cell'><span className='count' >{this.props.count}</span></td>
        <td className='cell'>{showButton}</td>
      </tr>)



  }

}

export default ProductBlock;