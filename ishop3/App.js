"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/shop';


let catalogueArr = require('./answers.json');
catalogueArr.map((e,i) => {
    e.code=i
 });

ReactDOM.render( <Shop catalogue = { catalogueArr }/>,
    document.getElementById('container')
);

