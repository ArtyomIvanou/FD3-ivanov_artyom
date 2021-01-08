import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ProductBlock from './product';
import ProductDescription from './product-desc';
//import VotesAnswer from './VotesAnswer';

class Shop extends React.Component {

    /*static propTypes = {
      startWorkMode: PropTypes.number.isRequired,
      question: PropTypes.string.isRequired,
      answers:PropTypes.arrayOf(
        PropTypes.shape({
          code: PropTypes.number.isRequired,
          count: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          freeanswer: PropTypes.bool,
        })
      ),
      deffreeanswertext: PropTypes.string.isRequired,
    };*/

    state = {
        selectedItemID: 0,
        newArr: this.props.catalogue
    }

    deleted = (it) => {
        var check = confirm('вы уверены?')
        if (check) {
            this.state.newArr = this.props.catalogue.filter(function(a, i) {
                return i != it
            })
        } else {
            return
        }
    }

    selected = (it) => {
        this.setState({ selectedItemID: it })
    }

   

    render() {

        
        var productsCode = this.state.newArr.map(a =>

            <ProductBlock key = { a.code }
            shop = {a.shop }
            catalogue = {a.catalogue }
            productName = {a.productName }
            price = {a.price }
            photo = {a.photo }
            count = {a.count }
            number = {a.code }
            selected = {this.selected }
            selectedItemID = {this.state.selectedItemID }
            cbDeteted = {this.deleted }
            />
        )
var ProductUnitDescription=this.state.newArr.map(a =>

    <ProductDescription key = { a.code }
    shop = {a.shop }
    catalogue = {a.catalogue }
    productName = {a.productName }
    price = {a.price }
    photo = {a.photo }
    count = {a.count }
    number = {a.code }
    //selected = {this.selected }
    //selectedItemID = {this.state.selectedItemID }
    //cbDeteted = {this.deleted }
    />
)
        return (
        <div className = 'ProductBlock' >
            <table>
                <tbody className = 'Answers' >{productsCode}</tbody>
            </table>
            <div className = 'ProductDescription'>{ProductUnitDescription}</div>
        </div>
        );

    }

}

export default Shop;