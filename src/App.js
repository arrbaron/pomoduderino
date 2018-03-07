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
      status: 'idle',
      message: ''
    };
    this.setStatus = this.setStatus.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  setStatus(status) {
    this.setState({ status });
  }

  setMessage(message) {
    this.setState({ message });
  }

  showNotification() {
    if (typeof Notification !== 'undefined') {
      const notification = new Notification('Title', {
        body: this.state.message
      });
    }
  }
  
  render() {
    return (
      <div className="App">
        <header role="banner">
          <Header />
        </header>
        <main role="main">
          <Timer setStatus={this.setStatus} showNotification={this.showNotification} />
          <Quote status={this.state.status} setMessage={this.setMessage} />
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
