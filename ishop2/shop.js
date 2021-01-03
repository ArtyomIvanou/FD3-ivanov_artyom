var Shop = React.createClass({

    displayName: 'Shop',

    getDefaultProps: function() {
        return {
            catalogue: "Пустая позиция",
        }
    },
    getInitialState: function() {
        return {
            selectedItemID: 0,
            newArr: this.props.catalogue
        };
    },
    deleted: function(it) {

        var check = confirm('вы уверены?')
        if (check) {
            this.state.newArr = this.props.catalogue.filter(function(a, i) {
                return i != it
            })
        } else {
            return
        }

    },
    selected: function(it) {
        this.setState({ selectedItemID: it })
    },


    render: function() {

        var productsCode = this.state.newArr.map(a =>

            React.createElement(ProductBlock, {
                key: a.code,
                shop: a.shop,
                catalogue: a.catalogue,
                productName: a.productName,
                price: a.price,
                photo: a.photo,
                count: a.count,
                number: a.code,
                selected: this.selected,
                selectedItemID: this.state.selectedItemID,
                cbDeteted: this.deleted,
            }))


        return React.DOM.div({ className: 'ProductBlock' },
            React.DOM.h1({ className: 'shop_name' }, this.props.shop),
            React.DOM.table({ className: 'products', },
                React.DOM.tbody({}, productsCode)
            )
        );
    },
});