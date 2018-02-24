import React from 'react';

const Controls = props => {
  return (
    <div className="controls">
      <button onClick={() => props.start()}>Start</button>
      <button onClick={() => props.pause()}>Pause</button>
      <button onClick={() => props.stop()}>Stop</button>
      <form onSubmit={e => props.set(e)}>
        <input type="number" name="minutes" defaultValue={props.minutes} />
        <input type="number" name="seconds" defaultValue={props.seconds} />
        <button>Set</button>
      </form>
    </div>
  );
};

export default Controls;