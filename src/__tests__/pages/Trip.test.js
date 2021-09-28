import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Trip from '../../pages/Trip';

const mockStore = configureStore([]);

const initialState = {
  trips: {
    tripsCollection: [
      {
        id: 1,
        title: "ALAMEDIN GORGE",
        description: "The Alamedin Gorge is one of the four most visited and popular gorges of the Kirghiz Range.",
        imageUrl: "http://example.com/image/1",
        tourDetailsText: "Requires basic skills of being in the mountains.",
        altitudeDifference: "350 m",
        season: "year around",
        distanceByCar: "90 km",
        trekkingDistance: "12 km",
        cost: "500 KGS",
        trip_dates: [
          {
            id: 1,
            date: "2021-11-30"
          },
          {
            id: 2,
            date: "2021-12-01"
          },
        ],
      },
    ],
    loading: false,
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/trips/1' }),
}));

describe('Page Trip', () => {
  let store;
  afterAll(cleanup);

  it('renders required data', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Trip /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('ALAMEDIN GORGE')).toBeInTheDocument();
    expect(screen.getByText('90 km')).toBeInTheDocument();
    expect(screen.getByText('500 KGS')).toBeInTheDocument();
  });
});
