import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {


  render() {
    var reg=/<br [/]>|<br>|<br[/]>/
    console.log(reg.test(this.props.text))
    var res=[]
    var arr=this.props.text.split(reg)
    console.log(this.props.text.split(reg))
   
arr.map((e,i) => {
  
  res.push(e)
  if (i!=arr.length-1) {
    res.push(<br key={i}></br>)
  }
 
});
   

    return (
      res
    );
  }
}

export default BR2JSX;
