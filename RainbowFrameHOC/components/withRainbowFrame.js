import React from 'react';

let withRainbowFrame = color => Component => props => {
  var xxx = <Component {...props} />
  color.forEach(e => {
    xxx = <div style={{ border: "solid 2px " + e, padding: "10px" }}>{xxx}</div>
  });

return xxx
}

export { withRainbowFrame };
