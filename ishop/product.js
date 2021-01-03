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
            //console.log(this.props.catalogue)
            var unit = a;
            var unitCode =
                React.DOM.tr({ key: unit.code, className: 'product' },
                    React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'product_name' }, unit.productName)),
                    React.DOM.td({ className: 'cell' }, React.DOM.img({ src: unit.photo }, )),
                    React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'price' }, unit.price)),
                    React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'count' }, unit.count)),
                );
            productsCode.push(unitCode);
        });

        return React.DOM.div({ className: 'ProductBlock' },
            React.DOM.h1({ className: 'shop_name' }, this.props.shop),
            React.DOM.table({ className: 'products' },
                React.DOM.tbody({}, productsCode)
            )
        );
    },
});