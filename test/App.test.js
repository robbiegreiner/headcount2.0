import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import App from '../src/App';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('Controls', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
  });



});
