import React from 'react';
import main from '../images/main.png';

const Header = props => (
  <div>
    <h1>Pomoduderino</h1>
    <img src={main} alt="banner"/>
    <p>Welcome to Pomoduderino. A tool for helping you work efficiently but also like, chill out, man.</p>
  </div>
);

export default Header;