import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Controls.css';

const Controls = props => {
  let playButtons = null;
  let inputs = null;

  const checkBlank = value => value === '' ? 0 : parseInt(value, 10);

  if (props.status === 'idle') {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.start('working')}>Start</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  } else if (props.status === 'working' || props.status === 'resting') {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.pause(props.status)}>Pause</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  } else if (props.status === 'paused') {
    playButtons = 
      <div className="controls__play-buttons">
        <button onClick={() => props.resume(props.lastStatus)}>Resume</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  }

  if (props.status === 'working' || props.status === 'resting') {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.pause(props.status)}>Pause</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  } else if (props.status === 'paused') {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.resume(props.lastStatus)}>Resume</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;
  } else if (props.status === 'idle') {
    playButtons =
      <div className="controls__play-buttons">
        <button onClick={() => props.start('working')}>Start</button>
        <button onClick={() => props.stop()}>Stop</button>
      </div>;

    inputs =
      <fieldset name="controls__inputs" className="controls__inputs">
        <legend>Time settings</legend>
        <div className="row">
          <div className="column">
            <label htmlFor="working-minutes">Working minutes</label>
            <input type="number" name="working-minutes" id="working-minutes" min={0} onChange={e => props.setMinutes(checkBlank(e.target.value))} value={props.minutes} />
          </div>
          <div className="column">
            <label htmlFor="working-seconds">Working seconds</label>
            <input type="number" name="working-seconds" id="working-seconds" min={0} max={60} onChange={e => props.setSeconds(checkBlank(e.target.value))} value={props.seconds} />
          </div>
          <div className="column">
            <label htmlFor="resting-minutes">Resting minutes</label>
            <input type="number" name="resting-minutes" id="resting-minutes" min={0} onChange={e => props.setRestingMinutes(checkBlank(e.target.value))} value={props.restingMinutes} />
          </div>
          <div className="column">
            <label htmlFor="resting-seconds">Resting seconds</label>
            <input type="number" name="resting-seconds" id="resting-seconds" min={0} max={60} onChange={e => props.setRestingSeconds(checkBlank(e.target.value))} value={props.restingSeconds} />
          </div>
        </div>
      </fieldset>;
  }

  return (
    <div className="controls">
      {playButtons}
      {inputs}
    </div>
  );
};

Controls.propTypes = {
  status: PropTypes.oneOf(['idle', 'working', 'resting', 'paused']).isRequired,
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  resume: PropTypes.func.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setSeconds: PropTypes.func.isRequired,
  setRestingMinutes: PropTypes.func.isRequired,
  setRestingSeconds: PropTypes.func.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  workingMinutes: PropTypes.number.isRequired,
  workingSeconds: PropTypes.number.isRequired,
  restingMinutes: PropTypes.number.isRequired,
  restingSeconds: PropTypes.number.isRequired,
  lastStatus: PropTypes.string.isRequired
};

export default Controls;
