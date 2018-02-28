import React, { Component } from 'react';
import Display from '../components/Display';
import Controls from '../components/Controls';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      minutes: 15,
      seconds: 0,
      timeDisplay: '15 : 00',
      ticking: false
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
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
      this.formatTime(this.state.minutes, this.state.seconds);
    }, 1000);
  }

  stopTimer() {
    this.setState({
      minutes: 15,
      seconds: 0,
      timeDisplay: '15 : 00',
      ticking: false
    });
    clearInterval(this.intervalId);
  }

  pauseTimer() {
    this.setState({ ticking: false });
    clearInterval(this.intervalId);
  }

  setTimer(e) {
    e.preventDefault();
    const minutes = e.target.minutes.value;
    const seconds = e.target.seconds.value;

    this.setState({
      minutes,
      seconds
    });
    this.formatTime(minutes, seconds);
    // this.formatTime(this.state.minutes, this.state.seconds);
  }

  formatTime(numMinutes, numSeconds) {
    let seconds = parseInt(numSeconds, 10);
    let minutes = parseInt(numMinutes, 10);

    if (seconds < 10) seconds = `0${seconds}`;
    if (minutes < 10) minutes = `0${minutes}`;
    
    this.setState({ timeDisplay: `${minutes} : ${seconds}` });
  }

  render() {
    return (
      <section className="timer">
        <Display time={this.state.timeDisplay} />
        <Controls 
          start={this.startTimer} stop={this.stopTimer} pause={this.pauseTimer} set={this.setTimer}
          minutes={this.state.minutes} seconds={this.state.seconds} ticking={this.state.ticking}
        />
      </section>
    );
  }
}

export default Timer;
