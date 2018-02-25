import React from 'react';

const Controls = props => {
  let playButtons = null;

  if (props.ticking) {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.pause()}>Pause</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  } else {
    playButtons = 
      <div className="controls__play-buttons">
        <button onClick={() => props.start()}>Start</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  }
  
  return (
    <div className="controls">
      {playButtons}
      <form onSubmit={e => props.set(e)}>
        <input type="number" name="minutes" defaultValue={props.minutes} />
        <input type="number" name="seconds" defaultValue={props.seconds} />
        <button>Set</button>
      </form>
    </div>
  );
};

export default Controls;