import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import User from '../../pages/User';

const mockStore = configureStore([]);

const initialState1 = {
  trips: {
    tripsCollection: [
      {
        id: 1,
        title: 'ALAMEDIN GORGE',
        description: 'The Alamedin Gorge is one of the four most visited and popular gorges of the Kirghiz Range.',
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
      },
    ],
    loading: false,
  },
  currentUser: {
    id: 1,
    username: 'azamat',
    token: 'TOKEN',
    reservations: [
      {
        id: 1,
        date: '2021-11-30',
        created_at: '2021-09-27T15:44:07.581Z',
        trip: {
          id: 1,
          title: 'ALAMEDIN GORGE',
        },
      },
    ],
    loading: false,
  },
};

const initialState2 = {
  currentUser: {
    id: 1,
    username: 'azamat',
    token: 'TOKEN',
    reservations: [],
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

  it('renders required data if there is reservations made', () => {
    store = mockStore(initialState1);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><User /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('ALAMEDIN GORGE')).toBeInTheDocument();
    expect(screen.getByText('30.11.2021')).toBeInTheDocument();
    expect(screen.getByText('27.09.2021')).toBeInTheDocument();
  });

  it('renders required data if there is no reservations made', () => {
    store = mockStore(initialState2);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><User /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('azamat')).toBeInTheDocument();
    expect(screen.getByText('No reservations made.')).toBeInTheDocument();
  });
});
