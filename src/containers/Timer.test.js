import React from 'react';
import { shallow, mount } from 'enzyme';
import '../setupTests';
import Timer from './Timer';

describe('<Timer />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<Timer />);
  });

  it('Renders a section', () => {
    const wrapper = shallow(<Timer />);
    const sections = wrapper.find('section');
    expect(sections.length).toBeGreaterThan(0);
  });

  it('Calls startTimer()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().startTimer();
  });

  it('Calls stopTimer()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().stopTimer();
  });

  it('Calls pauseTimer()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().pauseTimer();
  });

  it('Updates minutes state on setMinutes()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().setMinutes(20);
    expect(wrapper.state('minutes')).toEqual(20);
  });

  it('Updates seconds state on setSeconds()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().setSeconds(20);
    expect(wrapper.state('seconds')).toEqual(20);
  });
});
