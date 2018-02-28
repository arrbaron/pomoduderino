import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Footer from './Footer';

describe('<Footer /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Footer />);
  });
});
