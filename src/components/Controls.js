import React from 'react';

const Controls = props => {
  return (
    <div className='controls'>
      <button onClick={() => props.start()}>Start</button>
      <button onClick={() => props.stop()}>Stop</button>
    </div>
  );
};

export default Controls;