import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../components/Controls';

class Timer extends Component {  
  constructor() {
    super();
    this.state = {
      minutes: 15,
      seconds: 0,
      ticking: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.setMinutes = this.setMinutes.bind(this);
    this.setSeconds = this.setSeconds.bind(this);
  }
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.state.seconds <= 0) {
        this.setState({
          seconds: 60,
          minutes: this.state.minutes - 1
        });
      }
      this.setState({
        seconds: this.state.seconds - 1,
        ticking: true
      });
      // this.formatTime(this.state.minutes, this.state.seconds);
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        this.props.finishTimer();
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    this.setState({
      minutes: 15,
      seconds: 0,
      ticking: false
    });
    clearInterval(this.intervalId);
  }

  pauseTimer() {
    this.setState({ ticking: false });
    clearInterval(this.intervalId);
  }

  setMinutes(mins) {
    let minutes = mins;
    // if (minutes < 10) minutes = `0${minutes}`;
    // if (minutes < 1) minutes = 1;
    this.setState({ minutes });
  }

  setSeconds(secs) {
    let seconds = secs;
    if (seconds > 60) seconds = 60;
    if (seconds < 1) seconds = 0;
    this.setState({ seconds });
  }

  formatTime(numMinutes, numSeconds) {
    let seconds = parseInt(numSeconds, 10);
    let minutes = parseInt(numMinutes, 10);

    if (seconds < 10) seconds = `0${seconds}`;
    if (minutes < 10) minutes = `0${minutes}`;
    
    this.setState({
      seconds,
      minutes
    });
  }

  render() {
    return (
      <section className="timer">
        <Controls 
          start={this.startTimer} stop={this.stopTimer} pause={this.pauseTimer}
          minutes={this.state.minutes} seconds={this.state.seconds} ticking={this.state.ticking}
          setMinutes={this.setMinutes} setSeconds={this.setSeconds}
        />
      </section>
    );
  }
}

Timer.propTypes = {
  finishTimer: PropTypes.func.isRequired
};

export default Timer;
