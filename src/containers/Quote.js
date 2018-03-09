import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuoteText from '../components/QuoteText';
import QuoteImage from '../components/QuoteImage';
import '../styles/Quote.css';

class Quote extends Component {
  render() {
    return (
      <section className="quote">
        <QuoteText text={this.props.texts[this.props.activeImage]} />
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
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  texts: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  activeImage: state.alertReducer.activeImage,
  images: state.alertReducer.images,
  texts: state.alertReducer.texts
});

export default connect(mapStateToProps)(Quote);
