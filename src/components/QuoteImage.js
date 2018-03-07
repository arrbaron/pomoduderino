import React from 'react';
import PropTypes from 'prop-types';

const QuoteImage = props => {
  return (
    <img src={props.imageUrl} alt={props.imageAlt} />
  );
};

QuoteImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default QuoteImage;
