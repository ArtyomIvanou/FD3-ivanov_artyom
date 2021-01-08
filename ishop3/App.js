"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/shop';

//let questionText='Как вы относитесь к программированию?';
let catalogueArr = require('./answers.json');
//let defaultFreeAnswerText="???";

ReactDOM.render( <Shop catalogue = { catalogueArr }/>,
    document.getElementById('container')
);

/*<Shop catalogue = { catalogueArr }/>,
document.getElementById('container')*/
    /*<VotesBlock 
        question={questionText}
        answers={answersArr}
        deffreeanswertext={defaultFreeAnswerText}
        startWorkMode={1}
      />
      , document.getElementById('container') */