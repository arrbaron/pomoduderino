import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Display from './Display';

describe('<Display /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Display />);
  });
});
