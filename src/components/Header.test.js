import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Header from './Header';

describe('<Header /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Header />);
  });
});
