import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './containers/Timer';
import Quote from './containers/Quote';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: 'waiting'
    };
    this.finishTimer = this.finishTimer.bind(this);
  }

  finishTimer() {
    this.setState({ status: 'finished' });
    const notification = new Notification('Title', {
      body: 'BEHOLD THE GLORY OF MY NOTIFICATION'
    });
  }
  
  componentDidMount() {
    Notification.requestPermission()
      .then(result => console.log(result));
  }
  
  render() {
    return (
      <div className="App">
        <header role="banner">
          <Header />
        </header>
        <main role="main">
          <Timer finishTimer={this.finishTimer} />
          <Quote />
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
