import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Card from '../src/Card';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Card', () => {

  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<Card object={{ data: {key: "lol"}}}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a div with a className of card', () => {
    expect(wrapper.find('.card').length).toEqual(1)
  });

  it('should have an h5, p, li tags', () => {
    expect(wrapper.find('h5').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('li').length).toEqual(1);
  });



});
