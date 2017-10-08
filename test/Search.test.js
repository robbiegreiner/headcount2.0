import React from 'react';
import { configure, mount } from 'enzyme';
import Search from '../src/Search';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Search funcitonality', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<Search search={ jest.fn() }/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a div with a className of search', () => {
    expect(wrapper.find('.search').length).toEqual(1);
  });

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should take in a function as a property', () => {
    expect(wrapper.prop('search')._isMockFunction).toBe(true);
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      inputValue: ''
    });
  });
});
