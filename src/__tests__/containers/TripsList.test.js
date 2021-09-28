import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TripsList from '../../containers/TripsList';

describe('TripCard', () => {
  configure({ adapter: new Adapter() })
  const trips = [
    {
      id: 1,
      title: 'ALAMEDIN GORGE',
      description: 'The Alamedin Gorge is one of the four most visited and popular gorges of the Kirghiz Range.',
      imageUrl: 'http://example.com/image/1',
      cost: '500 KGS',
    },
    {
      id: 2,
      title: 'CHUNKURCHAK GORGE',
      description: 'Chunkurchak Gorge is located between the Alamedin and Ala-Archa gorges and you can recognize it by its form of basin.',
      imageUrl: 'http://example.com/image/2',
      cost: '400 KGS',
    },
    {
      id: 3,
      title: 'ISSYK-ATA GORGE',
      description: 'The Issyk-Ata Gorge is located 85 km from Bishkek, driving through the Krasnaya Rechka village ( Bishkek – Balykchi highway).',
      imageUrl: 'http://example.com/image/3',
      cost: '600 KGS',
    },
  ];

  it('should match the snapshot', () => {
    const wrapper = shallow(<TripsList trips={trips} />);
    expect(wrapper).toMatchSnapshot();
  });
});