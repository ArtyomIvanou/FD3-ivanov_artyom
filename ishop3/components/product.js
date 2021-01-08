import React from 'react';
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
}
  qqq = (EO) => {
    this.props.cbDeteted(this.props.number);
  }

  selected = (EO) => { 
    this.props.selected(this.props.number);
  }

  render() {
    if (this.props.number == 0) {
      var showButton = null
  } else { var showButton=<input type='button' value='delete' name='delete' data= {this.props.number} className= 'button_delete' onClick= {this.qqq}
  //checked={this.props.selectedAnswerCode==this.props.code}
  //onClick={this.answerClicked}
/>
     /* var showButton = React.DOM.input({ type: 'button', value: 'delete', data: this.props.number, className: 'button_delete', onClick: this.qqq, }, )*/
  }
  if (this.props.selectedItemID == this.props.number && this.props.number > 0) {
      var selectedStyle = this.state.backgrondChecked
  } else {
      var selectedStyle = this.state.backgrondNotChecked
  }
return (<tr  className= {selectedStyle} data= {this.props.number} onClick= {this.selected}>
<td className= 'cell'><span className= 'product_name'>{this.props.productName}</span></td>
<td className= 'cell'><span className= "label_name">{this.props.photo}</span></td>
<td className= 'cell'><span className= 'price' >{this.props.price}</span></td>
<td className= 'cell'><span className= 'count' >{this.props.count}</span></td>
<td className= 'cell'>{showButton}</td>
</tr>)

    /*if ( this.props.workMode==1 ) {
      return (
        <div>
          <label className='VotesBlockAnswer'>
            <input type='radio' value={this.props.code} name='voteanswer'
              checked={this.props.selectedAnswerCode==this.props.code}
              onClick={this.answerClicked}
            />
            <span>{this.props.text}</span>
            {
              (this.props.freeanswer) &&
              <input type='text' name='votefreeanswer' className='FreeAnswer'
                defaultValue={this.props.freeanswertext} onChange={this.freeAnswerTextChanged}
                disabled={this.props.selectedAnswerCode!=this.props.code}
              />
            }
          </label>
        </div>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }*/

  }

}

export default ProductBlock;