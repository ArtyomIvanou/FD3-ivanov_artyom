var Filter = React.createClass({
    displayName: 'Filter',
    getDefaultProps: function() {
        return {
            catalogue: "Пустая позиция",
        }
    },
    getInitialState: function() {
        return {
            textEmpty: [],
            checkedFilter: false,
            arr: this.props.catalogue,
            arrayIsSorted: false,
            arrIsChanged: [],
        };
    },
    setFilterAlphabet: function() {
        /*if (this.state.arrayIsSorted) {
            this.setState({ arrayIsSorted: false, })
            return this.setState(this.state.arr)
        }*/
        var newArr = []


        if (this.state.arrayIsSorted) {
            this.setState({ arrayIsSorted: false, })
            this.setState(this.state.arr)
        }
        this.state.arr.forEach(function aaa(a) {
            newArr.push(a)
        })
        newArr.sort(function(a, b) {
            var nameA = a.toString(),
                nameB = b.toString()
            if (nameA < nameB) //сортируем строки по возрастанию
                return -1
            if (nameA > nameB)
                return 1
            return 0 // Никакой сортировки
        })
        this.setState({ arrayIsSorted: true, })
        return this.state.arr,
            this.setState({ arr: newArr }),
            alert(this.state.arr)

        /*this.setState({ arrayIsSorted: true, })
        this.setState({ arr: newArr })*/
    },

    freeAnswerTextChanged: function(EO) {

        console.log(EO.target.value);
        this.state.textEmpty.push(EO.target.value);
        this.state.arr = this.props.catalogue.filter(function(a) {
            return a.indexOf(EO.target.value) >= 0

        })
        console.log(this.state.arr)
    },
    render: function() {
        var productsCode = [];

        this.state.arr.forEach(function unitCreator(a) {
            var unit = a;
            var unitCode = React.DOM.option({ key: a, className: '' }, unit)
            productsCode.push(unitCode);
        });
        return React.DOM.div({ className: 'Wrapper' }, React.DOM.div({ className: 'Filter' },
            React.DOM.input({ type: 'checkbox', /*defaultChecked: false,*/ onChange: this.setFilterAlphabet }), React.DOM.input({ type: 'text', /*defaultValue: this.state.textEmpty,*/ onChange: this.freeAnswerTextChanged }, ), React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.getInitialState }),
        ), React.DOM.select({ multiple: true, }, productsCode), );
    },
});