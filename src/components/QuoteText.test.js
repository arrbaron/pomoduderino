import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import QuoteText from './QuoteText';

describe('<QuoteText /> component', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<QuoteText />);
  });
});
