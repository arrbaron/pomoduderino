import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/Controls';
import Display from '../components/Display';

class Timer extends Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  startTimer() {
    this.props.setStatus('working');
    this.props.setImage(1);
    this.tick = setInterval(() => {
      if (this.props.currentSeconds <= 0) {
        this.props.setSeconds(60);
        this.props.setMinutes(this.props.currentMinutes - 1);
      }
      this.props.setSeconds(this.props.currentSeconds - 1);
      if (this.props.status !== 'idle' && this.props.currentMinutes === 0 && this.props.currentSeconds === 0) {
        this.timerFinish();
      }
    }, 1000);
  }

  stopTimer() {
    this.props.setStatus('idle');
    this.props.setImage(0);
    this.props.setMinutes(this.props.workingMinutes);
    this.props.setSeconds(this.props.workingSeconds);
    clearInterval(this.tick);
  }

  pauseTimer() {
    clearInterval(this.tick);
  }

  timerFinish() {
    if (this.props.status === 'working') {
      this.props.setStatus('resting');
      this.props.setImage(2);
      this.props.setMinutes(this.props.restingMinutes);
      this.props.setSeconds(this.props.restingSeconds);
    } else if (this.props.status === 'resting') {
      this.props.setStatus('working');
      this.props.setImage(1);
      this.props.setMinutes(this.props.workingMinutes);
      this.props.setSeconds(this.props.workingSeconds);
    }
  }

  // should break out sound logic into its own component
  playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }

  render() {
    return (
      <section className="timer">
        <Display minutes={this.props.currentMinutes} seconds={this.props.currentSeconds} />
        <Controls
          start={this.startTimer} stop={this.stopTimer} pause={this.pauseTimer}
          minutes={this.props.currentMinutes} seconds={this.props.currentSeconds} status={this.props.status}
          workingMinutes={this.props.workingMinutes} workingSeconds={this.props.workingSeconds}
          restingMinutes={this.props.restingMinutes} restingSeconds={this.props.restingSeconds}
          setMinutes={this.props.setWorkingMinutes} setSeconds={this.props.setWorkingSeconds} finishWorking={this.finishWorking}
          setRestingMinutes={this.props.setRestingMinutes} setRestingSeconds={this.props.setRestingSeconds}
        />
      </section>
    );
  }
}

Timer.propTypes = {
  setSeconds: PropTypes.func.isRequired,
  setMinutes: PropTypes.func.isRequired,
  setWorkingMinutes: PropTypes.func.isRequired,
  setWorkingSeconds: PropTypes.func.isRequired,
  setRestingMinutes: PropTypes.func.isRequired,
  setRestingSeconds: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  setImage: PropTypes.func.isRequired,
  currentMinutes: PropTypes.number.isRequired,
  currentSeconds: PropTypes.number.isRequired,
  workingMinutes: PropTypes.number.isRequired,
  workingSeconds: PropTypes.number.isRequired,
  restingMinutes: PropTypes.number.isRequired,
  restingSeconds: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  setMinutes: minutes => dispatch({ type: 'SET_MINUTES', minutes }),
  setSeconds: seconds => dispatch({ type: 'SET_SECONDS', seconds }),
  setWorkingMinutes: minutes => dispatch({ type: 'SET_WORKING_MINUTES', minutes }),
  setWorkingSeconds: seconds => dispatch({ type: 'SET_WORKING_SECONDS', seconds }),
  setRestingMinutes: minutes => dispatch({ type: 'SET_RESTING_MINUTES', minutes }),
  setRestingSeconds: seconds => dispatch({ type: 'SET_RESTING_SECONDS', seconds }),
  setStatus: status => dispatch({ type: 'SET_STATUS', status }),
  setImage: image => dispatch({ type: 'SET_IMAGE', image })
});

const mapStateToProps = state => ({
  workingMinutes: state.timerReducer.workingMinutes,
  workingSeconds: state.timerReducer.workingSeconds,
  restingMinutes: state.timerReducer.restingMinutes,
  restingSeconds: state.timerReducer.restingSeconds,
  currentMinutes: state.timerReducer.currentMinutes,
  currentSeconds: state.timerReducer.currentSeconds,
  status: state.timerReducer.status
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
