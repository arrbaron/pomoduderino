import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './containers/Timer';
import Quote from './containers/Quote';
import Footer from './components/Footer';
import './App.css';

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
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
