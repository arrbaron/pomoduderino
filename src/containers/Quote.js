import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QuoteText from '../components/QuoteText';
import QuoteImage from '../components/QuoteImage';
import working from '../images/working.jpg'; 
import resting from '../images/resting.jpg'; 

class Quote extends Component {
  componentDidMount() {
    Notification.requestPermission()
      .then(result => console.log(result));
  }

  sendAlert() {
    if (typeof Notification !== 'undefined') {
      const notification = new Notification('Title', {
        body: this.props.text
      });
    }
  }

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
  text: PropTypes.string.isRequired,
  sound: PropTypes.oneOf(['apple', 'banana']).isRequired,
};

const mapStateToProps = state => ({
  activeImage: state.alertReducer.activeImage,
  images: state.alertReducer.images,
  text: state.alertReducer.text,
  sound: '',
});

export default connect(mapStateToProps)(Quote);
