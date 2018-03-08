import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './containers/Timer';
import Quote from './containers/Quote';
import Alert from './containers/Alert';
import Footer from './components/Footer';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header role="banner">
          <Header />
        </header>
        <main role="main">
          <Timer />
          <Quote />
          <Alert />
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
