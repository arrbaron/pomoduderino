import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import QuoteImage from './QuoteImage';

describe('<QuoteImage /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<QuoteImage />);
  });
});
