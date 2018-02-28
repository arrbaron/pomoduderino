import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Quote from './Quote';

describe('<Quote /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Quote />);
  });
});
