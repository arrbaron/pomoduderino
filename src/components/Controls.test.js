import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Controls from './Controls';

describe('<Controls /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Controls />);
  });
});
