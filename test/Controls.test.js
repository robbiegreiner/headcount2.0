import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Controls from '../src/Controls';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Controls', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Controls />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a div with a className of controls', () => {
    expect(wrapper.find('.controls').length).toEqual(1);
  });

  it('should have four buttons', () => {
    expect(wrapper.find('button').length).toEqual(4);
  });

  it('should have a button with an ID of kindergarten', () => {
    expect(wrapper.find('#kindergarten').length).toEqual(1);
  });

  // it('should handle a click event', () => {
  //   const button = wrapper.find('.buttonClick')
  //   console.log('hellllo', button);
  //   button.simulate('click')
  //   expect(onClickFunction).toHaveBeenCalled();
  // });

  // target of undefined
});
