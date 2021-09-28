import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import TripCard from '../../components/TripCard';

describe('TripCard', () => {
  configure({ adapter: new Adapter() })
  const trip = {
    id: 1,
    title: "ALAMEDIN GORGE",
    description: "The Alamedin Gorge is one of the four most visited and popular gorges of the Kirghiz Range.",
    imageUrl: "http://example.com/image/1",
    cost: "500 KGS",
  };

  it('should match the snapshot', () => {
    const wrapper = shallow(<Router><TripCard trip={trip} /></Router>);
    expect(wrapper).toMatchSnapshot();
  });
});