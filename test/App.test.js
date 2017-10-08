import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-15';
import DistrictRepository from '../src/helper.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
const bigData = new DistrictRepository(kindergarten);


configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
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
      comparedData: {},
    })
  });

  it('should change state when kindergarten button is clicked', () => {
      expect(wrapper.state()).toEqual({
          bigData: {},
          comparedData: {},
        });

      wrapper = mount(<App locationSearch={ jest.fn }/>);
      const cardData = wrapper.find('Card').get(0);
      const button = wrapper.find('button').first()
      const kinData = bigData.data
      button.simulate('click')
      expect(wrapper.state()).toEqual({bigData: kinData,
                                      comparedData: {},
                                      view: 'kindergarten'})
  });

  it('should change state when a card is clicked', () => {
    expect(wrapper.state()).toEqual({
        bigData: {},
        comparedData: {},
      });

    wrapper = mount(<App locationSearch={ jest.fn }/>);
    const cardData = wrapper.find('Card').get(0);
    const button = wrapper.find('button').first();
    const kinData = bigData.data;
    button.simulate('click');
    const card = wrapper.find('.card').first();
    card.simulate('click');
    expect(wrapper.state()).toEqual({bigData: kinData,
                                    comparedData: { Colorado: kinData.Colorado },
                                    view: 'kindergarten'});

  });

  it('should change state change state when user enters a search input', () => {

    wrapper = mount(<App />);
    const button = wrapper.find('button').first();
    const kinData = bigData.data;
    button.simulate('click');
    expect(wrapper.state()).toEqual({bigData: kinData,
                                    comparedData: {},
                                    view: 'kindergarten'});
    const searchInput = wrapper.find('input');
    searchInput.simulate('change', {target: {value: 'colorado springs'}});
    expect(wrapper.state()).toEqual({bigData: {"COLORADO SPRINGS 11": kinData['COLORADO SPRINGS 11']},
                                    comparedData: {},
                                    view: 'kindergarten'});
  });

});
