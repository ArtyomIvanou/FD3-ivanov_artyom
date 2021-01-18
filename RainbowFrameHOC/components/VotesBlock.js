import React from 'react';


import './VotesBlock.css';


import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

class VotesBlock extends React.Component {
  cbPressed = (but) => {
    console.log(but)
  }
  render() {
    let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
    let DoubleButtonWithRF = withRainbowFrame(colors)(DoubleButton)
    return (<div>
      <DoubleButton caption1='left' caption2='right' cbPressed={this.cbPressed} >Здесь может быть ваша реклама</DoubleButton>
      <DoubleButtonWithRF caption1='левый' caption2='правый' cbPressed={this.cbPressed} >Здесь может быть ваша реклама</DoubleButtonWithRF></div>

    )


  }

}

export default VotesBlock;
