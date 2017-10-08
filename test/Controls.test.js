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

  it('should handle a click event when kindergarten button is clicked', () => {
    wrapper =mount(<Controls
      event={[]}
      kindergarten={[]}
      updateView={ jest.fn() }/>);

    const button = wrapper.find('#kindergarten');
    button.simulate('click');
    expect(wrapper.instance().props.updateView).toHaveBeenCalled();
  });

  it('should handle a click event when highschool button is clicked', () => {
    wrapper =mount(<Controls
      event={[]}
      highschool={[]}
      updateView={ jest.fn() }/>);

    const button = wrapper.find('#highschool');
    button.simulate('click');
    expect(wrapper.instance().props.updateView).toHaveBeenCalled();
  });

  it('should handle a click event when childPoverty button is clicked', () => {
    wrapper =mount(<Controls
      event={[]}
      childPoverty={[]}
      updateView={ jest.fn() }/>);

    const button = wrapper.find('#childPoverty');
    button.simulate('click');
    expect(wrapper.instance().props.updateView).toHaveBeenCalled();
  });

  it('should handle a click event when remediation button is clicked', () => {
    wrapper =mount(<Controls
      event={[]}
      remediation={[]}
      updateView={ jest.fn() }/>);

    const button = wrapper.find('#remediation');
    button.simulate('click');
    expect(wrapper.instance().props.updateView).toHaveBeenCalled();
  });

});
