import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

import ProductBlock from './product';
import ProductDescription from './product-desc';
import ProductUnitEditor from './product-edit';
//import VotesAnswer from './VotesAnswer';

class Shop extends React.Component {

    state = {
        selectedItemID: 0,
        newArr: this.props.catalogue,
        isProductEdited: false,
        editIsWrong: null,
        mode: 1
    }

    deleted = (it) => {
        var check = confirm('вы уверены?')
        this.setState({ isProductEdited: false })
        if (check) {
            this.state.newArr = this.props.catalogue.filter(function (a, i) {
                return i != it
            })
        } else {
            return
        }
    }

    selected = (it) => {
        this.setState({ selectedItemID: it })
        this.setState({ isProductEdited: false })
        if (this.state.isProductEdited) {
            // this.setState({ isProductEdited: true}) 
        }
    }
    edited = (it, bool) => {
        this.setState({ selectedItemID: it })
        if (bool) {
            this.setState({ isProductEdited: true })
        }
    }
    checkCorrect = (bool) => {
        this.setState({ editIsWrong: bool })
    }
    saveCard = (it, hash) => {

        this.state.newArr[it].productName = hash[0]
        this.state.newArr[it].price = hash[2]
        this.state.newArr[it].photo = hash[1]
        this.state.newArr[it].count = hash[3]
        this.state.newArr[it].code = hash[4]
        //console.log(this.state.newArr[it] )
        this.setState(this.state.newArr)
    }
    creatorMode = (num) => {
        this.setState({ mode: 2 })

    }
    render() {
        //список товаров
        var productsCode = this.state.newArr.map(a =>
            <ProductBlock key={a.code}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={a.code}
                selected={this.selected}
                selectedItemID={this.state.selectedItemID}
                cbDeteted={this.deleted}
                edited={this.edited}
                editIsWrong={this.state.editIsWrong}
            />
        )
        //описание товара
        var ProductUnitDescription = this.state.newArr.map(a =>
            <ProductDescription key={a.code}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={a.code}
            />
        )
        //редактирование товара
        var ProductUnitEditorAll = this.state.newArr.map(a =>
            <ProductUnitEditor key={a.code}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={a.code}
                editIsWrong={this.checkCorrect}
                changed={this.state.editIsWrong}
                save={this.saveCard}
                newId={this.state.newArr.length}
                mode={this.state.mode}
            />
        )
        var c = this.state.selectedItemID

        if (this.state.selectedItemID > 0) {
            var ProductUnitDescriptionShow = ProductUnitDescription[c]
        } else {
            var ProductUnitDescriptionShow = null
        }
        if (this.state.isProductEdited) {
            ProductUnitDescriptionShow = null
            var ProductUnitEditorShow = ProductUnitEditorAll[c]
        }
        else { var ProductUnitEditorShow = null }
        return (
            <div className='ProductBlock' >
                <table>
                    <tbody className='Answers' >{productsCode}</tbody>
                </table>
                <div className='ProductDescription'>{ProductUnitDescriptionShow}</div>
                <div className='ProductEditor'>{ProductUnitEditorShow}</div>
                <input type="button" value="create" ></input>
            </div>
        );
    }
}
export default Shop;