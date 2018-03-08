import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuoteText from '../components/QuoteText';
import QuoteImage from '../components/QuoteImage';

class Quote extends Component {
  render() {
    return (
      <section className="Quote">
        <QuoteText text={this.props.text} />
        <QuoteImage 
          imageUrl={this.props.images[this.props.activeImage].url}
          imageAlt={this.props.images[this.props.activeImage].alt} 
        />
      </section>
    );
  }
}

Quote.propTypes = {
  activeImage: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  activeImage: state.alertReducer.activeImage,
  images: state.alertReducer.images,
  text: state.alertReducer.text
});

export default connect(mapStateToProps)(Quote);
