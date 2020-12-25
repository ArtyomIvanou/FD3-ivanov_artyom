var Filter = React.createClass({
    displayName: 'Filter',
    getDefaultProps: function() {
        return {
            catalogue: "Пустая позиция",
        }
    },
    getInitialState: function() {
        return {
            textEmpty: '',
            checkedFilter: false,
            arr: this.props.catalogue,
            arrayIsSorted: false,
            arrIsChanged: this.props.catalogue,
            clearInput: '',
        };
    },
    setFilterAlphabet: function() {
        var newArr = []
        if (this.state.arrayIsSorted) {
            this.setState({ arrayIsSorted: false, })
            this.state.arr.forEach(function aaa(a) {
                    newArr.push(a)
                })
                //alert(newArr)
                //this.setState(this.state.arr)
        } else {
            this.setState({ arrayIsSorted: true, })
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
        }
        this.setState({ arrIsChanged: newArr })
    },
    freeAnswerTextChanged: function(EO) {

        //console.log(EO.target.value);
        //this.state.textEmpty.push(EO.target.value);
        //this.setState(this.state.textEmpty = EO.target.value)
        // 
        this.state.textEmpty = '';
        this.state.textEmpty += EO.target.value
        var qqq = this.state.textEmpty.toString()
        console.log(this.state.textEmpty)
        this.state.arr = this.props.catalogue.filter(function(a) {
            return a.indexOf(qqq) >= 0

        })
        console.log(this.state.arr)

        var ccc = []
        this.state.arr.forEach(function aaa(a) {
            ccc.push(a)
        })
        if (this.state.arrayIsSorted) {

            ccc.sort(function(a, b) {
                var nameA = a.toString(),
                    nameB = b.toString()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
        }
        this.setState({ arrIsChanged: ccc })

    },
    discard: function() {
        this.setState({
            arr: this.props.catalogue,
            arrayIsSorted: false,
            arrIsChanged: this.props.catalogue,
            textEmpty: '',
        })

    },
    resortSelect: function() {
        alert('good')
    },
    render: function() {
        var productsCode = [];

        this.state.arrIsChanged.forEach(function unitCreator(a) {
            var unit = a;
            var unitCode = React.DOM.option({ key: a, className: '' }, unit)
            productsCode.push(unitCode);
        });
        return React.DOM.div({ className: 'Wrapper' }, React.DOM.div({ className: 'Filter' },
            React.DOM.input({ type: 'checkbox', /*defaultChecked: this.state.arrayIsSorted,*/ checked: this.state.arrayIsSorted, onChange: this.setFilterAlphabet }), React.DOM.input({ type: 'text', /*defaultValue: this.state.clearinput,*/ value: this.state.textEmpty, onChange: this.freeAnswerTextChanged }, this.state.clearinput), React.DOM.input({ type: 'button', value: 'Сброс', onClick: this.discard }),
        ), React.DOM.select({ multiple: true, }, productsCode), );
    },
});