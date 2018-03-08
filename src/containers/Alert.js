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
        body: this.props.text
      });
      audio = new Audio(abides);
    } else if (status === 'resting') {
      const notification = new Notification('Relax, man.', {
        body: this.props.text
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
  text: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  text: state.alertReducer.text,
  status: state.timerReducer.status
});

export default connect(mapStateToProps)(Alert);
