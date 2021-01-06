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

        this.props.cbDeteted(this.props.number);
    },
    selected: function() {
        console.log(this.props.number)
        this.props.selected(this.props.number);
    },

    render: function() {
        if (this.props.number == 0) {
            var showButton = null
        } else {
            var showButton = React.DOM.input({ type: 'button', value: 'delete', data: this.props.number, className: 'button_delete', onClick: this.qqq, }, )
        }
        if (this.props.selectedItemID == this.props.number && this.props.number > 0) {
            var selectedStyle = this.state.backgrondChecked
        } else {
            var selectedStyle = this.state.backgrondNotChecked
        }
        return React.DOM.tr({ className: selectedStyle, data: this.props.number, onClick: this.selected, },
            React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'product_name' }, this.props.productName)),
            React.DOM.td({ className: 'cell' }, React.DOM.img({ src: this.props.photo }, )),
            React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'price' }, this.props.price)),
            React.DOM.td({ className: 'cell' }, React.DOM.span({ className: 'count' }, this.props.count)),
            React.DOM.td({ className: 'cell' }, showButton)
        )

    }
})