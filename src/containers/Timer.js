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
    };
    const intervalId = null;

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }
  
  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.state.seconds <= 0) {
        this.setState({
          seconds: 60,
          minutes: this.state.minutes - 1,
          ticking: true
        });
      }
      this.setState({ seconds: this.state.seconds - 1});
      this.formatTime();
    }, 1000)
  }

  stopTimer() {
    this.setState({
      minutes: 15,
      seconds: 0,
      timeDisplay: '15 : 00'
    });
    clearInterval(this.intervalId);
  }

  formatTime() {
    let seconds = parseInt(this.state.seconds, 10);
    let minutes = parseInt(this.state.minutes, 10);

    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    
    this.setState({ timeDisplay: `${minutes} : ${seconds}`});
  }

  render() {
    return (
      <section className='timer'>
        <Display time={this.state.timeDisplay} />
        <Controls start={this.startTimer} stop={this.stopTimer}/>
      </section>
    );
  }
}

export default Timer;