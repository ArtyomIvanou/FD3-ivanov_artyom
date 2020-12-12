var ProductBlock = React.createClass({

    displayName: 'ProductBlock',

    getDefaultProps: function() {
        return {
            catalogue: "Пустая позиция",
        }
    },

    render: function() {
        var productsCode = [];
        this.props.catalogue.forEach(function unitCreator(a) {
            var unit = a;
            var unitCode =
                React.DOM.div({ key: unit.code, className: 'product' },
                    React.DOM.span({ className: 'product_name' }, 'Товар:' + unit.productName),
                    React.DOM.img({ src: unit.photo }, ),
                    React.DOM.span({ className: 'price' }, 'Цена:' + unit.price),
                    React.DOM.span({ className: 'count' }, 'Количество на складе:' + unit.count),
                );
            productsCode.push(unitCode);
        });
        /*for (var a = 0; a < this.props.catalogue.length; a++) {
            var unit = this.props.catalogue[a];
            var unitCode =
                React.DOM.div({ key: unit.code, className: 'product' },
                    React.DOM.span({ className: 'product_name' }, 'Товар:' + unit.productName),
                    React.DOM.img({ src: unit.photo }, ),
                    React.DOM.span({ className: 'price' }, 'Цена:' + unit.price),
                    React.DOM.span({ className: 'count' }, 'Количество на складе:' + unit.count),

                );
            productsCode.push(unitCode);
        }*/
        return React.DOM.div({ className: 'ProductBlock' },
            React.DOM.h1({ className: 'shop_name' }, this.props.shop),
            React.DOM.div({ className: 'products' }, productsCode),
        );
    },
});