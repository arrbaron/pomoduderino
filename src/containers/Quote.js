import React, { Component } from 'react';
import QuoteText from '../components/QuoteText';
import QuoteImage from '../components/QuoteImage';

class Quote extends Component {
  render() {
    return (
      <section className="Quote">
        <QuoteText />
        <QuoteImage />
      </section>
    );
  }
}

export default Quote;