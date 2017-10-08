import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import CardContainer from '../src/CardContainer';
import Adapter from 'enzyme-adapter-react-15';
import Card from '../src/Card';

configure({ adapter: new Adapter() });

describe('Card container', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<CardContainer
                       cardsArray={[]}
                       bigData={{}}
                       comparedCards={[]}
                       comparedData={[]}
                       />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have three div classNames', () => {
    expect(wrapper.find('.compared-card-container').length).toEqual(1);
    expect(wrapper.find('.card').length).toEqual(1);
    expect(wrapper.find('.card-container').length).toEqual(1);
  });

  it('should have multiple Card class fields', () => {
    const wrapper2 = mount(<CardContainer
                            // cardsArray={[]}
                            bigData={{
                              key1: {data: {},
                                     location: 'Colorado'},
                              key2: {data: {},
                                     location: 'Town'},
                              key3: {data: {},
                                     location: 'Holy'}}}
                            comparedData={{
                              key1: {data: {},
                                     location: 'Colorado'},
                              key2: {data: {},
                                     location: 'Town'},
                              key3: {data: {},
                                     location: 'Holy'}}}
                              />);

    expect(wrapper2.find('Card').length).toEqual(6);
  });

});
