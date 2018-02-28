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

  // it('Calls setTimer()', () => {
  //   const wrapper = mount(<Timer />);

  //   const event = jest.fn();
  //   wrapper.instance().setTimer();
  // });

  it('Updates timeDisplay state on formatTime()', () => {
    const wrapper = shallow(<Timer />);
    wrapper.instance().formatTime(20, 20);
    expect(wrapper.state('timeDisplay')).toEqual('20 : 20');
  });
});
