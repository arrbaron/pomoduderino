import React from 'react';

const Display = props => {
  return (
    <div className="display">
      <p>{props.time}</p>
    </div>
  );
};

export default Display;