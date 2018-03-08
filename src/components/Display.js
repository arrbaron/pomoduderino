import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = props => {
  let displayMinutes = props.minutes;
  let displaySeconds = props.seconds;

  if (displayMinutes < 10) displayMinutes = `0${props.minutes}`;
  if (displaySeconds < 10) displaySeconds = `0${props.seconds}`;
  
  return (
    <div className="display">
      <span>{displayMinutes} : {displaySeconds}</span>
    </div>
  );
};

Display.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired
};

export default Display;
