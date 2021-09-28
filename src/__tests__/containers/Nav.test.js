import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../../containers/Nav';

describe('TripCard', () => {
  configure({ adapter: new Adapter() })

  it('should match the snapshot', () => {
    const wrapper = shallow(<Router><Nav /></Router>);
    expect(wrapper).toMatchSnapshot();
  });
});