import React from 'react';

const Display = props => {
  return (
    <div className='display'>
      <p>Display</p>
      <p>{props.time}</p>
    </div>
  );
};

export default Display;