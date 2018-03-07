import React from 'react';
import PropTypes from 'prop-types';

const Controls = props => {
  let playButtons = null;
  let inputs = null;

  if (props.status !== 'idle') {
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
        <input type="number" name="minutes" min={0} onChange={e => props.setMinutes(parseInt(e.target.value, 10))} value={props.minutes} />
        <input type="number" name="seconds" min={0} max={60} onChange={e => props.setSeconds(parseInt(e.target.value, 10))} value={props.seconds} />
        <input type="number" name="resting-minutes" min={0} onChange={e => props.setRestingMinutes(parseInt(e.target.value, 10))} value={props.restingMinutes} />
        <input type="number" name="resting-seconds" min={0} max={60} onChange={e => props.setRestingSeconds(parseInt(e.target.value, 10))} value={props.restingSeconds} />
      </div>;
  }

  return (
    <div className="controls">
      {playButtons}
      {inputs}
    </div>
  );
};

Controls.propTypes = {
  status: PropTypes.string.isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
  setRestingMinutes: PropTypes.func.isRequired,
  setRestingSeconds: PropTypes.func.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  workingMinutes: PropTypes.number.isRequired,
  workingSeconds: PropTypes.number.isRequired,
  restingMinutes: PropTypes.number.isRequired,
  restingSeconds: PropTypes.number.isRequired
};

export default Controls;
