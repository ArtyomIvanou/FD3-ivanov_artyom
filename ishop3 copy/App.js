"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/shop';


let catalogueArr = require('./answers.json');


ReactDOM.render( <Shop catalogue = { catalogueArr }/>,
    document.getElementById('container')
);

