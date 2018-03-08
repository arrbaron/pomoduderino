import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Alert from './Alert';

describe('<Alert /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Alert />);
  });
});
