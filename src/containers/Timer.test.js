import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';
import Timer from './Timer';

describe('<Timer />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Timer />);
  });
});
