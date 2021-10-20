import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TripDetails from '../../containers/TripDetails';

describe('TripDetails', () => {
  configure({ adapter: new Adapter() });
  const trip = {
    id: 1,
    title: 'ALAMEDIN GORGE',
    description: 'The Alamedin Gorge is one of the four most visited and popular gorges of the Kirghiz Range.',
    imageUrl: 'http://example.com/image/1',
    tourDetailsText: 'Requires basic skills of being in the mountains.',
    altitudeDifference: '350 m',
    season: 'year around',
    distanceByCar: '90 km',
    trekkingDistance: '12 km',
    cost: '500 KGS',
    trip_dates: [
      {
        id: 1,
        date: '2021-11-30',
      },
      {
        id: 2,
        date: '2021-12-01',
      },
    ],
  };

  it('should match the snapshot', () => {
    const wrapper = shallow(<TripDetails trip={trip} />);
    expect(wrapper).toMatchSnapshot();
  });
});
