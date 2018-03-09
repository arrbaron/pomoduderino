import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bowling from '../sounds/bowling.wav';
import abides from '../sounds/abides.wav';

class Alert extends Component {
  componentDidMount() {
    Notification.requestPermission()
      .then(result => console.log(result));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.sendAlert(this.props.status);
    }
  }

  sendAlert(status) {
    let audio = null;
    
    if (status === 'working') {
      const notification = new Notification('HERE WE GO', {
        body: this.props.texts[1]
      });
      audio = new Audio(abides);
    } else if (status === 'resting') {
      const notification = new Notification('Relax, man.', {
        body: this.props.texts[2]
      });
      audio = new Audio(bowling);
    }
    if (audio) audio.play();
  }
  
  render() {
    return null;
  }
}

Alert.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
  activeImage: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  texts: state.alertReducer.texts,
  status: state.timerReducer.status,
  activeImage: state.alertReducer.activeImage
});

export default connect(mapStateToProps)(Alert);
