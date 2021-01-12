import React from 'react';


import './style.css';

import ProductBlock from './product';
import ProductDescription from './product-desc';
import ProductUnitEditor from './product-edit';


class Shop extends React.Component {

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
            var res=[]
           res= this.state.newArr.filter(function (s, i) {

                return i != it
            })
        }

       console.log(res)
       this.setState({newArr:res})
        this.setState({isProductEdited: false})

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
        console.log(this.state.newArr)
        this.setState({ isProductEdited: false })
        this.state.newArr.splice(it, 1, hash)
        this.setState(this.state.newArr)
        
    }
    creatorMode = () => {
        this.setState({ mode: 2,/*selectedItemID: 0,*/ })
        this.setState({ isProductEdited: true })
    }
    render() {
        //список товаров
        var productsCode = this.state.newArr.map((a,i) =>
            <ProductBlock key={i}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={i}
                selected={this.selected}
                selectedItemID={this.state.selectedItemID}
                cbDeteted={this.deleted}
                edited={this.edited}
                editIsWrong={this.state.editIsWrong}
            />
        )
        //описание товара
        var ProductUnitDescription = this.state.newArr.map((a,i) =>
            <ProductDescription key={i}
                shop={a.shop}
                catalogue={a.catalogue}
                productName={a.productName}
                price={a.price}
                photo={a.photo}
                count={a.count}
                number={i}
            />
        )
        //редактирование товара

        var ProductUnitEditorAll = this.state.newArr.map((a,i) =>
            <ProductUnitEditor key={i}
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
                newId={this.state.newArr.length}
                mode={this.state.mode}
            />
        )

        var ProductCreate =
            <ProductUnitEditor key={this.state.newArr.length}
                shop={''}
                catalogue={''}
                productName={''}
                price={''}
                photo={''}
                count={''}
                number={this.state.newArr.length}
                editIsWrong={this.checkCorrect}
                changed={this.state.editIsWrong}
                save={this.saveCard}
                newId={this.state.newArr.length}
                mode={this.state.mode}
            />



        if (this.state.selectedItemID > 0) {
            var ProductUnitDescriptionShow = ProductUnitDescription[this.state.selectedItemID]
        }
        if (this.state.isProductEdited) {
            ProductUnitDescriptionShow = null
            if (this.state.mode == 1) {
                var ProductUnitEditorShow = ProductUnitEditorAll[this.state.selectedItemID]
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