import React, { Component } from 'react';
import Display from '../components/Display';
import Controls from '../components/Controls';

class Timer extends Component {
  render() {
    return (
      <section className='timer'>
        <Display />
        <Controls />
      </section>
    );
  }
}

export default Timer;