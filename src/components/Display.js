import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  Display.propTypes = {
    time: PropTypes.string.isRequired
  };

  return (
    <div className="display">
      <p>{props.time}</p>
    </div>
  );
};

export default Display;
