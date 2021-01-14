import React, { Fragment } from 'react';




class ProductUnitEditor extends React.Component {
  constructor(props) {
    super(props)
    //console.log(this.props.mode)
    
  }

  state = {

    idItem: this.props.number,
    changeResulted: null,

    productName: this.props.productName,
    productNameIsCorrect: true,
    nameIsChanging: false,

    unitLabel: this.props.photo,
    labelIsCorrect: true,
    labelIsChanging: false,

    price: this.props.price,
    priceIsCorrect: true,
    priceIsChanging: false,

    count: this.props.count,
    countIsCorrect: true,
    countIsChanging: false,

    error: false
  }
 
  cardIsChanging = () => {
   
    if ((this.state.nameIsChanging == false) && (this.state.labelIsChanging == false) && (this.state.priceIsChanging == false) && (this.state.countIsChanging == false)) {
     
      this.state.changeResulted = false
      this.setState({ changeResulted: false })
    } else {
      this.state.changeResulted = true
      this.setState({ changeResulted: true })
    }

    this.props.editIsWrong(this.state.changeResulted)
   
  }

  nameEdited = (EO) => {

    this.state.productName = ""
    this.state.productName += EO.target.value
    var resN = this.state.productName
    resN.toString().trim()

    if (resN == "") {
      this.setState({ productNameIsCorrect: false })
      this.props.editIsWrong(this.state.productNameIsCorrect)
    }
    else { this.setState({ productNameIsCorrect: true }) }
    this.setState({ productName: this.state.productName })

    if (resN == this.props.productName.toString().trim()) {
      this.state.nameIsChanging = false
      this.setState({ nameIsChanging: false })
      this.props.editIsWrong(this.state.nameIsChanging)
    }
    else {
      this.state.nameIsChanging = true
      this.setState({ nameIsChanging: true })
      this.props.editIsWrong(this.state.nameIsChanging)
    }

  }

  labelEdited = (EO) => {

    this.state.unitLabel = ""
    this.state.unitLabel += EO.target.value
    var resL = this.state.unitLabel
    resL.toString().trim()

    if (resL == "") {
      this.setState({ labelIsCorrect: false })
      this.props.editIsWrong(this.state.labelIsCorrect)
    }
    else { this.setState({ labelIsCorrect: true }) }
    this.setState({ unitLabel: this.state.unitLabel })
    if (resL == this.props.photo.toString()) {
      this.state.labelIsChanging = false
      this.setState({ labelIsChanging: false })
      this.props.editIsWrong(this.state.labelIsChanging)
    }
    else {
      this.state.labelIsChanging = true
      this.setState({ labelIsChanging: true })
      this.props.editIsWrong(this.state.labelIsChanging)
    }

  }
  priceEdited = (EO) => {


    this.state.price = ""
    this.state.price += EO.target.value

    var resP = this.state.price
    resP.toString().trim()
   

    if (resP == "") {
      this.setState({ priceIsCorrect: false })
      this.props.editIsWrong(this.state.priceIsCorrect)
    }
    else { this.setState({ priceIsCorrect: true }) }
    this.setState({ price: this.state.price })

    if (resP == this.props.price.toString()) {
      this.state.priceIsChanging = false
      this.setState({ priceIsChanging: false })
      this.props.editIsWrong(this.state.priceIsChanging)
    }
    else {
      this.state.priceIsChanging = true
      this.setState({ priceIsChanging: true })
      this.props.editIsWrong(this.state.priceIsChanging)
    }
  }
  countEdited = (EO) => {


    this.state.count = ""
    this.state.count += EO.target.value

    var resC = this.state.count
    resC.toString().trim()
   
    if (resC == "") {
      this.setState({ countIsCorrect: false })
      this.props.editIsWrong(this.state.countIsCorrect)
    }
    else { this.setState({ countIsCorrect: true }) }
    this.setState({ count: this.state.count })

    if (resC == this.props.count.toString()) {
      this.state.countIsChanging = false
      this.setState({ countIsChanging: false })
      this.props.editIsWrong(this.state.countIsChanging)
    }
    else {
      this.state.countIsChanging = true
      this.setState({ countIsChanging: true })
      this.props.editIsWrong(this.state.countIsChanging)
    }
  }
  saveChanges = () => {
   
    var arr = {}
    arr.productName=this.state.productName
    arr.price=this.state.price
    arr.photo=this.state.unitLabel
    arr.count=this.state.count
    arr.code=this.state.idItem
  
    console.log(arr)
    this.props.save(this.props.number, arr)
    this.props.editIsWrong(false)
  }
  discardChanges = (EO) => {
    this.props.editIsWrong(false)
    this.setState({
      changeResulted: null,

      productName: this.props.productName,
      productNameIsCorrect: true,
      nameIsChanging: false,

      unitLabel: this.props.photo,
      labelIsCorrect: true,
      labelIsChanging: false,

      price: this.props.price,
      priceIsCorrect: true,
      priceIsChanging: false,

      count: this.props.count,
      countIsCorrect: true,
      countIsChanging: false,
    })
  }
  render() {
   
    //алерт по имени
    if (!this.state.productNameIsCorrect) {
      var alertProductNameIsWrong = "Внимание!Поле не заполнено!"
    } else {
      var alertProductNameIsWrong = null
    }
    //алерт по лэйблу
    if (!this.state.labelIsCorrect) {
      var alertLabelIsWrong = "Внимание!Поле не заполнено!"
    } else {
      var alertLabelIsWrong = null
    }
    //алерт по цене
    if (!this.state.priceIsCorrect) {
      var alertPriceIsWrong = "Внимание!Поле не заполнено!"
    } else {
      var alertPriceIsWrong = null
    }
    //алерт по количеству
    if (!this.state.countIsCorrect) {
      var alertCountIsWrong = "Внимание!Поле не заполнено!"
    } else {
      var alertCountIsWrong = null
    }
    //дисэйбл кнопки
    if (this.state.productName==''||this.state.unitLabel==''||this.state.price==''||this.state.count=='') {
      var disabledB=true
    } else {
      var disabledB=false
    }
    //выбор мода
     if (this.props.mode==1) {
       var buttonBlock=<div> <input type="button" value="save" onClick={this.saveChanges} disabled={disabledB}></input>
       <input type="button" value="cancel" onClick={this.discardChanges} ></input></div>
     } if (this.props.mode==2) {
      var buttonBlock=<div> <input type="button" value="add" onClick={this.saveChanges} disabled={disabledB}></input>
      <input type="button" value="cancel" onClick={this.discardChanges} ></input></div>
     }
    return (

      <Fragment>
        <h2>Редактировать выбранный продукт</h2>
        <div onChange={this.cardIsChanging}>
          <div><span>ID: {this.state.idItem}</span></div>
          <div onBlur={this.cardIsChanging}><span >Имя: </span><input type="text" value={this.state.productName} onChange={this.nameEdited} ></input><span>{alertProductNameIsWrong}</span></div>
          <div onBlur={this.cardIsChanging}><span>Label: </span><input type="text" value={this.state.unitLabel} onChange={this.labelEdited} ></input><span>{alertLabelIsWrong}</span></div>
          <div><span>Цена: </span><input type="text" value={this.state.price} onChange={this.priceEdited}></input><span>{alertPriceIsWrong}</span></div>
          <div><span>Количество: </span><input type="text" value={this.state.count} onChange={this.countEdited}></input><span>{alertCountIsWrong}</span></div>
        </div>
        <div>
         {buttonBlock}
        </div>

      </Fragment>
    )
  }

}

export default ProductUnitEditor;