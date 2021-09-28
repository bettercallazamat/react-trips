import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../pages/Home';

const mockStore = configureStore([]);

const initialState = {
  trips: {
    tripsCollection: [
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
    ],
    loading: false,
  },
};

describe('Page Home', () => {
  let store;
  afterAll(cleanup);

  it('loads all trips from store', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('ALAMEDIN GORGE')).toBeInTheDocument();
    expect(screen.getByText('CHUNKURCHAK GORGE')).toBeInTheDocument();
    expect(screen.getByText('ISSYK-ATA GORGE')).toBeInTheDocument();
  });
});
