import React from 'react';
import PropTypes from 'prop-types';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';
import ColorFrame from './ColorFrame';

class VotesBlock extends React.Component {
  render() {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    return (
        <ColorFrame color={colors}>
         Hello
        </ColorFrame>  
    )
    

  }

}

export default VotesBlock;
