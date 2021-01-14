import React from 'react';


import './style.css';

import ProductBlock from './product';
import ProductDescription from './product-desc';
import ProductUnitEditor from './product-edit';


class Shop extends React.Component {
    constructor(props) {
        super(props)
       

    }
    state = {
        selectedItemID: 0,
        newArr: this.props.catalogue,
        isProductEdited: false,
        isProductCreating: false,
        editIsWrong: null,
        mode: 1
    }

    deleted = (it) => {
        var check = confirm('вы уверены?')

        if (check) {
            var res = []
            res = this.state.newArr.filter(function (s, i) {

                return i != it
            })
        }

        console.log(res)
        this.setState({ newArr: res })
        this.setState({ isProductEdited: false })
        this.setState({ selectedItemID: 0 })

    }

    selected = (it) => {
        this.setState({ selectedItemID: it })
        this.setState({ isProductEdited: false })
        this.setState({ mode: 1 })

    }
    edited = (it, bool) => {
        this.setState({ mode: 1 })
        this.setState({ selectedItemID: it })
        if (bool) {
            this.setState({ isProductEdited: true })
        }
    }
    checkCorrect = (bool) => {
        this.setState({ editIsWrong: bool })
    }
    saveCard = (it, hash) => {
       
        this.setState({ isProductEdited: false })
        this.state.newArr.splice(it, 1, hash)
        this.setState(this.state.newArr)

    }
    creatorMode = () => {
        var newID=this.state.newArr[this.state.newArr.length-1].code+1
        this.setState({ newID: newID })
        this.setState({ mode: 2,/*selectedItemID: 0,*/ })
        this.setState({ isProductEdited: true })
    }
    render() {
        //console.log(this.state.selectedItemID)
        // console.log(this.state.newArr)
       
        //список товаров
        var productsCode = this.state.newArr.map((a, i) =>
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
        var ProductUnitDescription = this.state.newArr.map((a, i) =>
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

        var ProductUnitEditorAll = this.state.newArr.map((a, i) =>
            <ProductUnitEditor key={a.code}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={i}
                editIsWrong={this.checkCorrect}
                changed={this.state.editIsWrong}
                save={this.saveCard}
               // newId={newID}
                mode={this.state.mode}
            />
        )

        var ProductCreate =
            <ProductUnitEditor key={this.state.newID}
                shop={''}
                catalogue={''}
                productName={''}
                price={''}
                photo={''}
                count={''}
                number={this.state.newID}
                editIsWrong={this.checkCorrect}
                changed={this.state.editIsWrong}
                save={this.saveCard}
                newId={this.state.newID}
                mode={this.state.mode}
            />
        //выбор индетификатора для отрисовки
        var qqqq = null
        var sss = this.state.selectedItemID
        var selectedID = this.state.newArr.forEach((e, i) => {
            if (e.code == sss) {
                return qqqq = i
            }
        })
       
        //console.log(qqqq)
        //console.log(selectedID)

        //вырианты отрисовки
        if (this.state.selectedItemID > 0) {
            var ProductUnitDescriptionShow = ProductUnitDescription[qqqq]
        }
        if (this.state.isProductEdited) {
            ProductUnitDescriptionShow = null
            if (this.state.mode == 1) {
                var ProductUnitEditorShow = ProductUnitEditorAll[qqqq]
            }
            if (this.state.mode == 2) {
                var ProductUnitEditorShow = ProductCreate
            }
        }
        else {
            var ProductUnitEditorShow = null
            var butCreate = <input type="button" value="create" onClick={this.creatorMode} ></input>
        }
        return (
            <div className='ProductBlock' >
                <table>
                    <tbody className='Answers' >{productsCode}</tbody>
                </table>
                <div className='ProductDescription'>{ProductUnitDescriptionShow}</div>
                <div className='ProductEditor'>{ProductUnitEditorShow}</div>
                <div>{butCreate}</div>
            </div>
        );
    }
}
export default Shop;