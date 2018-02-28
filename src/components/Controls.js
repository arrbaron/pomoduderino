import React from 'react';
import PropTypes from 'prop-types';

const Controls = props => {
  Controls.propTypes = {
    ticking: PropTypes.bool.isRequired,
    start: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
    setMinutes: PropTypes.func.isRequired,
    setSeconds: PropTypes.func.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
  };

  let playButtons = null;
  let inputs = null;

  if (props.ticking) {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.pause()}>Pause</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;

    inputs =
      <div className="controls__inputs">
        <input type="number" name="minutes" disabled value={props.minutes} />
        <input type="number" name="seconds" disabled value={props.seconds} />
      </div>;
  } else {
    playButtons = 
      <div className="controls__play-buttons">
        <button onClick={() => props.start()}>Start</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;

    inputs = 
      <div className="controls__inputs">
        <input type="number" name="minutes" onChange={e => props.setMinutes(parseInt(e.target.value, 10))} value={props.minutes} />
        <input type="number" name="seconds" onChange={e => props.setSeconds(parseInt(e.target.value, 10))} value={props.seconds} />
      </div>;
  }


  return (
    <div className="controls">
      {playButtons}
      {inputs}
    </div>
  );
};

export default Controls;
