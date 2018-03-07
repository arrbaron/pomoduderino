import React from 'react';
import PropTypes from 'prop-types';

const QuoteText = props => {
  return (
    <p>{props.text}</p>
  );
};

QuoteText.propTypes = {
  text: PropTypes.string.isRequired
};

export default QuoteText;
