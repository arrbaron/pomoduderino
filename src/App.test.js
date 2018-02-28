import React from 'react';
import { shallow } from 'enzyme';
import './setupTests';
import App from './App';

describe('<App />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<App />);
  });
});
