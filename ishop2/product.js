var ProductBlock = React.createClass({

    displayName: 'ProductBlock',

    getDefaultProps: function() {
        return {
            catalogue: "Пустая позиция",
        }
    },
    getInitialState: function() {
        return {
            backgrondChecked: 'backgrondChecked',
            backgrondNotChecked: 'backgrondNotChecked',
            backgroundChanged: false,
            classNameTr: 'ProductBlock_white',
            selectedItem: this.props.selectedItemID,
            deleteItem: this.props.number,

        };
    },
    qqq: function(EO) {

        this.props.cbDeteted(EO.target.getAttribute('data'));
    },
    selected: function(EO) {

        this.props.selected(EO.target.getAttribute('data'));
    },

    render: function() {

        if (this.props.number == 0) {
            return React.DOM.tr({ className: this.state.backgrondNotChecked, data: this.props.number, },
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'product_name' }, this.props.productName)),
                React.DOM.td({ className: 'cell' }, React.DOM.img({ src: this.props.photo }, )),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'price' }, this.props.price)),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'count' }, this.props.count)),
                React.DOM.td({ className: 'cell' }, )
            )
        }
        if (this.props.selectedItemID == this.props.number) {
            return React.DOM.tr({ className: this.state.backgrondChecked, data: this.props.number, onClick: this.selected, },
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'product_name' }, this.props.productName)),
                React.DOM.td({ className: 'cell' }, React.DOM.img({ src: this.props.photo }, )),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'price' }, this.props.price)),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'count' }, this.props.count)),
                React.DOM.td({ className: 'cell' }, React.DOM.input({ type: 'button', value: 'delete', data: this.props.number, className: 'button_delete', onClick: this.qqq, }, ))
            )
        } else {
            return React.DOM.tr({ className: this.state.backgrondNotChecked, onClick: this.selected, data: this.props.number },
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'product_name' }, this.props.productName)),
                React.DOM.td({ className: 'cell' }, React.DOM.img({ src: this.props.photo }, )),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'price' }, this.props.price)),
                React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'count' }, this.props.count)),
                React.DOM.td({ className: 'cell' }, React.DOM.input({ type: 'button', value: 'delete', data: this.props.number, className: 'button_delete', onClick: this.qqq, }, ))
            )
        }



    }
})