import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
    // console.log(wrapper.debug());
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a ClassName of app, h1 and search-and-controls', () => {
    expect(wrapper.find('.app').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('.search-and-controls').length).toEqual(1);
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({
      bigData: {},
      cardsArray: [],
      view: 'initial',
      comparedData: {},
      averageCard: {}
    })
  });

  it('should change state when resetComparedState is executed', () => {
    // console.log(wrapper.instance().state);
      expect(wrapper.state()).toEqual({
          bigData: {},
          cardsArray: [],
          view: 'initial',
          comparedData: {},
          averageCard: {}
        });

        wrapper = mount(<App locationSearch={ jest.fn }/>);
        const cardData = wrapper.find('Card').get(0)
        console.log(wrapper.instance().locationSearch);
    // wrapper = mount(<App resetComparedState={ jest.fn() } />);
    // const compareFn = wrapper.instance().props.resetComparedState;
    // console.log(compareFn);
    // const compare = wrapper.find('comparedData');
    // compareFn.simulate('change', {target: {value: 'Color'}});
    // expect(wrapper.state().)
    // wrapper.instance().props.resetComparedState;
    // console.log(wrapper.state().comparedData);
    // expect(wrapper.state().comparedData).toEqual({});
  });

});
